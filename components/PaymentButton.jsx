// components/PaymentButton.jsx
import { useState } from 'react';
import * as PortOne from "@portone/browser-sdk/v2";

export default function PaymentButton({ item, className = "" }) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const showResult = (message, isSuccess = true, details = null) => {
    setResult({
      message,
      isSuccess,
      details
    });
  };

  const requestPayment = async () => {
    try {
      setIsLoading(true);
      setResult(null);

      // Generate unique payment ID
      const paymentId = `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const orderAmount = item.price;

      console.log('Starting payment for item:', item.name, 'Price:', orderAmount);

      // Call Port One payment
      const response = await PortOne.requestPayment({
        storeId: process.env.NEXT_PUBLIC_PORTONE_STORE_ID,
        channelKey: process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY,
        paymentId: paymentId,
        orderName: item.name,
        totalAmount: orderAmount,
        currency: "CURRENCY_KRW",
        payMethod: "CARD",
        redirectUrl: `${window.location.origin}/payment-result?itemId=${item.id}`,
        customer: {
          fullName: "고객",
          phoneNumber: "010-0000-0000",
          email: "customer@example.com"
        }
      });

      console.log('Payment response:', response);

      if (response.code !== undefined) {
        // Payment failed
        showResult(
          `❌ Payment Failed: ${response.message}`,
          false,
          {
            paymentId: paymentId,
            code: response.code,
            message: response.message,
            pgCode: response.pgCode,
            pgMessage: response.pgMessage
          }
        );
        return;
      }

      // Payment succeeded, now verify on server
      console.log('Payment successful, verifying on server...');
      
      const verificationResponse = await fetch('/api/payment/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentId: paymentId,
          orderAmount: orderAmount,
          itemId: item.id,
          itemName: item.name
        }),
      });

      const verificationResult = await verificationResponse.json();
      console.log('Server verification result:', verificationResult);

      if (verificationResult.success) {
        showResult(
          `✅ Payment Successful! Order confirmed for ${item.name}`,
          true,
          {
            paymentId: paymentId,
            status: verificationResult.status,
            itemName: item.name,
            amount: verificationResult.payment?.amount
          }
        );
      } else {
        showResult(
          `❌ Payment Verification Failed: ${verificationResult.message}`,
          false,
          verificationResult
        );
      }

    } catch (error) {
      console.error('Payment error:', error);
      showResult(
        `❌ Payment Error: ${error.message}`,
        false,
        { error: error.message }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-section">
      <button 
        onClick={requestPayment}
        disabled={isLoading}
        className={`border border-gray-400 p-[1em] text-2xl hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {isLoading ? '⏳ Processing...' : 'Buy now'}
      </button>

      {result && (
        <div className={`mt-4 p-4 rounded-lg text-sm ${
          result.isSuccess 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          <p className="font-medium">{result.message}</p>
          {result.details && (
            <details className="mt-2">
              <summary className="cursor-pointer text-xs opacity-70">View details</summary>
              <pre className="mt-1 text-xs bg-white p-2 rounded overflow-auto">
                {JSON.stringify(result.details, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}
    </div>
  );
}