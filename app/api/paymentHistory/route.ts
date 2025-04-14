import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { customer_id, reciver_id } = await req.json();

    // You must provide at least one ID to filter the records.
    if (!customer_id && !reciver_id) {
      return NextResponse.json(
        { error: "Missing customer_id or reciver_id parameter" },
        { status: 400 }
      );
    }

    // Build a filter: if customer_id is provided, get records where customer_id equals it;
    // if reciver_id is provided, get records where reciver_id equals it.
    const payments = await prisma.eventpayment.findMany({
      where: {
        OR: [
          customer_id ? { customer_id } : {},
          reciver_id ? { reciver_id } : {},
        ],
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return NextResponse.json({ payments });
  } catch (error: any) {
    console.error("Error fetching payment history:", error);
    return NextResponse.json(
      { error: "Failed to fetch payment history", message: error.message },
      { status: 500 }
    );
  }
}
