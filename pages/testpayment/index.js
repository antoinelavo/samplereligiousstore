// pages/testpayment.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PaymentButton from '@/components/PaymentButton';

export default function TestPayment() {
  const router = useRouter();
  const [hasPaymentResult, setHasPaymentResult] = useState(false);
  const [result, setResult] = useState({ message: 'Processing...', isSuccess: true });

  useEffect(() => {
    const { paymentId } = router.query;
    
    if (paymentId) {
      setHasPaymentResult(true);
      // Handle payment result logic here
    }
  }, [router.query]);

  // If no payment result, show payment form
  if (!hasPaymentResult) {
    return <PaymentButton />;
  }

  // Otherwise show payment result
  return (
    <div>
      {/* Payment result UI */}
      <button onClick={() => router.push('/testpayment')}>
        Try Again
      </button>
    </div>
  );
}