import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  let { email, password } = await request.json();
  email = email.trim();
  password = password.trim();
  try {
    const user = await prisma.company.findUnique({
      where: { email },
    });
    console.log(user);
    console.log(email);
    console.log(password);
    if (!user) {
      return NextResponse.json({ error: "error" });
    }
    if (user.password == password) {
        console.log("hellp");
        return NextResponse.json({ company : user });
    }
    else{
        return NextResponse.json({ error: "error" });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "error" });
  }
}
