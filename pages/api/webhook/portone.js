// pages/api/webhook/portone.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Webhook received:', req.body);

    const webhook = req.body;
    
    // Handle different webhook types
    switch (webhook.type) {
      case 'Transaction.Paid':
        await handlePaymentPaid(webhook.data);
        break;
      
      case 'Transaction.Failed':
        await handlePaymentFailed(webhook.data);
        break;
        
      case 'Transaction.Cancelled':
        await handlePaymentCancelled(webhook.data);
        break;
        
      case 'Transaction.VirtualAccountIssued':
        await handleVirtualAccountIssued(webhook.data);
        break;
        
      default:
        console.log(`Unhandled webhook type: ${webhook.type}`);
    }

    // Always respond with 200 to acknowledge receipt
    res.status(200).json({ received: true });

  } catch (error) {
    console.error('Webhook processing error:', error);
    // Still return 200 to avoid retries for processing errors
    res.status(200).json({ error: 'Processing failed' });
  }
}

async function handlePaymentPaid(data) {
  const { paymentId, storeId, transactionId } = data;
  
  try {
    console.log(`Payment completed via webhook: ${paymentId}`);
    
    // Verify payment with Port One API
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
      throw new Error(`Payment verification failed: ${paymentResponse.status}`);
    }

    const payment = await paymentResponse.json();
    
    if (payment.status === 'PAID') {
      // TODO: Update your database
      // await updateOrderStatus(paymentId, 'PAID');
      
      // TODO: Send confirmation email
      // await sendPaymentConfirmationEmail(paymentId);
      
      console.log(`✅ Payment ${paymentId} processed successfully via webhook`);
    }
    
  } catch (error) {
    console.error(`Failed to process payment webhook: ${paymentId}`, error);
  }
}

async function handlePaymentFailed(data) {
  const { paymentId } = data;
  console.log(`❌ Payment failed via webhook: ${paymentId}`);
  
  // TODO: Update order status to failed
  // await updateOrderStatus(paymentId, 'FAILED');
}

async function handlePaymentCancelled(data) {
  const { paymentId, cancellationId } = data;
  console.log(`🔄 Payment cancelled via webhook: ${paymentId}, cancellation: ${cancellationId}`);
  
  // TODO: Update order status to cancelled
  // await updateOrderStatus(paymentId, 'CANCELLED');
}

async function handleVirtualAccountIssued(data) {
  const { paymentId } = data;
  console.log(`🏦 Virtual account issued via webhook: ${paymentId}`);
  
  // TODO: Save virtual account info and notify customer
  // await updateOrderStatus(paymentId, 'VIRTUAL_ACCOUNT_ISSUED');
}