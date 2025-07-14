// pages/api/payment/complete.js
import { supabase } from '@/lib/supabase'; // Add this import at the top

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Payment completion request received:', req.body);
    
    const { paymentId, orderAmount, itemId, itemName } = req.body;

    if (!paymentId) {
      return res.status(400).json({ error: 'Payment ID is required' });
    }

    // 1. Call Port One payment inquiry API
    console.log(`Verifying payment: ${paymentId}`);
    
    const paymentResponse = await fetch(
      `https://api.portone.io/payments/${encodeURIComponent(paymentId)}`,
      {
        headers: { 
          'Authorization': `PortOne ${process.env.PORTONE_API_SECRET}`,
          'Content-Type': 'application/json'
        },
      }
    );

    if (!paymentResponse.ok) {
      const errorText = await paymentResponse.text();
      console.error('Port One API Error:', errorText);
      throw new Error(`Payment verification failed: ${paymentResponse.status} ${errorText}`);
    }

    const payment = await paymentResponse.json();
    console.log('Payment details from Port One:', JSON.stringify(payment, null, 2));

    // 2. Verify payment amount and status
    if (orderAmount && orderAmount !== payment.amount.total) {
      console.error(`Amount mismatch: expected ${orderAmount}, got ${payment.amount.total}`);
      return res.status(400).json({ 
        error: 'Payment amount mismatch',
        expected: orderAmount,
        actual: payment.amount.total
      });
    }

    // 3. Handle different payment statuses
    switch (payment.status) {
      case 'VIRTUAL_ACCOUNT_ISSUED':
        console.log('Virtual account issued');
        await saveOrderToDatabase(paymentId, itemId, 'virtual_account_issued', payment);
        
        return res.json({
          success: true,
          status: 'VIRTUAL_ACCOUNT_ISSUED',
          message: 'Virtual account has been issued',
          payment: payment
        });

      case 'PAID':
        console.log('Payment completed successfully');
        await saveOrderToDatabase(paymentId, itemId, 'paid', payment);
        
        return res.json({
          success: true,
          status: 'PAID',
          message: 'Payment completed successfully',
          payment: payment
        });

      case 'FAILED':
        console.log('Payment failed');
        return res.status(400).json({
          success: false,
          status: 'FAILED',
          message: 'Payment failed',
          payment: payment
        });

      default:
        console.log(`Payment status: ${payment.status}`);
        return res.json({
          success: true,
          status: payment.status,
          message: `Payment status: ${payment.status}`,
          payment: payment
        });
    }

  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ 
      error: 'Payment verification failed',
      message: error.message 
    });
  }
}

// Function to save orders to your database
async function saveOrderToDatabase(paymentId, itemId, status, paymentData) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          payment_id: paymentId,
          item_id: itemId,
          customer_name: paymentData.customer?.name || 'Unknown',
          customer_email: paymentData.customer?.email || null,
          customer_phone: paymentData.customer?.phoneNumber || null,
          quantity: 1,
          total_amount: paymentData.amount.total,
          status: status
        }
      ]);
    
    if (error) {
      console.error('Error saving order:', error);
      throw error;
    }
    
    console.log('Order saved successfully:', data);
    return data;
  } catch (error) {
    console.error('Database save failed:', error);
    // Don't throw error - payment was successful, just log the database issue
  }
}