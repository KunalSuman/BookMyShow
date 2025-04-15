import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { sender_id, receiver_phone, amount, location, details } = await req.json();
    if (!sender_id || !receiver_phone || amount == null) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    console.log("Received data:", { sender_id, receiver_phone, amount });
    const [paymentRecord, updatedSender, updatedReceiver] = await prisma.$transaction([
      prisma.payment.create({
        data: {
          sender_id,
          receiver_phone,
          amount,
          location: location || "",
          details: details || "",
        },
      }),

      prisma.customer.update({
        where: { id: sender_id },
        data: { balance: { decrement: amount } },
      }),
      prisma.customer.update({
        where: { id: receiver_phone }, // must be @unique in your schema
        data: { balance: { increment: amount } },
      }),
    ]);

    return NextResponse.json({ payment: paymentRecord, sender: updatedSender, receiver: updatedReceiver });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Transaction failed", message: error.message },
      { status: 500 }
    );
  }
}
