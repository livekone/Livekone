"use client";
import React from 'react';


interface PaymentButtonProps {
  className?: string;
  children: React.ReactNode;
  productType: 'speedPlan' | 'premiumPlan';
}

export function PaymentButton({ className, children, productType }: PaymentButtonProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/checkout_session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productType }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <button type="button" onClick={handleSubmit} className={className}>
      {children}
    </button>
  );
}
