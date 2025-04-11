import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data);
    console.log("Hello World");
    const payment = await prisma.payment.create({
      data: {
        sender_id: data.sender_id,
        receiver_id: data.receiver_id,
        amount: data.amount,
        location: data.location,
        details: data.details,
      },
    });
    console.log(payment);
    return NextResponse.json({ payment });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      { error: "Error in creating payment", message: e.message },
      { status: 500 }
    );
  }
}
