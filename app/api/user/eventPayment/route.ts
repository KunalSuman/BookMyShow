import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { event_id, customer_id, reciver_id, amount } = data;

    if (!event_id || !customer_id || !reciver_id || amount == null) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const existingCount = await prisma.eventpayment.count({
      where: { event_id },
    });
    if (existingCount >= 100) {
      return NextResponse.json(
        { error: "Event is already sold out" },
        { status: 400 }
      );
    }
    const [updatedCustomer, updatedCompany, eventPayment] = await prisma.$transaction([
      prisma.customer.update({
        where: { id: customer_id },
        data: { balance: { decrement: amount } },
      }),
      prisma.company.update({
        where: { id: reciver_id },
        data: { balance: { increment: amount } },
      }),
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
    console.error("Error creating event payment:", error);
    return NextResponse.json(
      { error: "Error creating event payment", message: error.message },
      { status: 500 }
    );
  }
}
