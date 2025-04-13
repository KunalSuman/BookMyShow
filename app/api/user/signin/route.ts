import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  // Extract email and password from the request body
  const { email, password } = await request.json();

  try {
    const user = await prisma.customer.findUnique({
      where: { email },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }
    if (user.password == password) {
        return NextResponse.json({ user });
    }
    else{
        return NextResponse.json({ error: "Invalid credentials" });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error fetching user" });
  }
}
