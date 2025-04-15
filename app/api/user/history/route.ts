// app/api/user/history/route.ts
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { customer_id } = await req.json();
    const history = await prisma.customer_history.findMany({
      where: { customer_id },
      include: { payment: true },
    });

    return NextResponse.json({ history });
  } catch (error: any) {
    console.error("Error fetching history:", error);
    return NextResponse.json(
      { error }
    );
  }
}
