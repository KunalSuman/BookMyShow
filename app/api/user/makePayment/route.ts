import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Expect the JSON payload to include event_id, customer_id, reciver_id, and amount.
    const { event_id, customer_id, reciver_id, amount } = await req.json();

    if (!event_id || !customer_id || !reciver_id || amount == null) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Run a transaction to update both balances and record the payment
    const [updatedCustomer, updatedCompany, eventPayment] = await prisma.$transaction([
      // Decrease customer balance
      prisma.customer.update({
        where: { id: customer_id },
        data: { balance: { decrement: amount } },
      }),
      // Increase company balance
      prisma.company.update({
        where: { id: reciver_id },
        data: { balance: { increment: amount } },
      }),
      // Create an event payment record
      prisma.eventpayment.create({
        data: {
          event_id,
          customer_id,
          reciver_id,
          amount,
        },
      }),
    ]);

    return NextResponse.json({
      updatedCustomer,
      updatedCompany,
      eventPayment,
    });
  } catch (error: any) {
    console.error("Error making payment:", error);
    return NextResponse.json(
      { error: "Error processing payment", message: error.message },
      { status: 500 }
    );
  }
}
