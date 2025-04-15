import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { user_id } = await req.json();
    if (!user_id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }
    const customer = await prisma.customer.findUnique({
      where: { id: user_id },
    });
    if (!customer) {
      return NextResponse.json({ error: "Customer not found" }, { status: 404 });
    }
    return NextResponse.json({ customer });
  } catch (error: any) {
    console.error("Error fetching customer profile:", error);
    return NextResponse.json(
      { error: "Error fetching customer profile", message: error.message },
      { status: 500 }
    );
  }
}
