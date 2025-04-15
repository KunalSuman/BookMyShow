import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { customer_id } = await req.json();

    if (!customer_id) {
      return NextResponse.json(
        { error: "Customer ID is required" },
        { status: 400 }
      );
    }
    const history = await prisma.eventpayment.findMany({
      where: { customer_id },
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ history });
  } catch (error: any) {
    console.error("Error fetching event payment history:", error);
    return NextResponse.json(
      { error: "Error fetching event payment history", message: error.message },
      { status: 500 }
    );
  }
}
