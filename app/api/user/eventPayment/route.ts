import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // We expect data: { event_id, customer_id, reciver_id, amount }
    const eventPayment = await prisma.eventpayment.create({
      data: {
        event_id: data.event_id,
        customer_id: data.customer_id,
        reciver_id: data.reciver_id,
        amount: data.amount,
      },
    });
    return NextResponse.json({ eventPayment });
  } catch (error: any) {
    console.error("Error creating event payment:", error);
    return NextResponse.json(
      { error: "Error creating event payment", message: error.message },
      { status: 500 }
    );
  }
}
