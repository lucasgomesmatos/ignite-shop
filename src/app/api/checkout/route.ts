import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const priceId = body.priceId;

  if (priceId) {
    const successUrl = `${process.env.NEXT_PUBLIC_URL}/success`;
    const cancelUrl = `${process.env.NEXT_PUBLIC_URL}`;

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ checkoutUrl: checkoutSession.url });
  }
}
