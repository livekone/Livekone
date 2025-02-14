import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let priceId = '';

    // リクエストデータに基づいて priceId を切り替える
    switch (body.productType) {
      case 'speedPlan':
        priceId = 'price_1QsFmnEeA3chXwj0nFueSvFW';
        break;
      case 'premiumPlan':
        priceId = 'price_1QsFn6EeA3chXwj0UmOTaMPW';
        break;
      default:
        return NextResponse.json({ error: 'Invalid product type' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
        },
      ],
      mode: 'payment',
      success_url: `${process.env.BASE_URL}/success`,
      cancel_url: `${process.env.BASE_URL}/lp/aiweb`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
