import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { user_id, newBalance } = await req.json();
    if (!user_id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }
    // Update the customer balance
    const updatedCustomer = await prisma.customer.update({
      where: { id: user_id },
      data: { balance: newBalance },
    });
    return NextResponse.json({ customer: updatedCustomer });
  } catch (error: any) {
    console.error("Error updating balance:", error);
    return NextResponse.json(
      { error: "Error updating balance", message: error.message },
      { status: 500 }
    );
  }
}
