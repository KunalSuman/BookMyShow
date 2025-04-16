import { NextResponse } from "next/server";
import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { type, id } = await req.json();

    if (!type || !id) {
      return NextResponse.json({ error: "Missing type or id" }, { status: 400 });
    }

    const table = {
      movie: prisma.movie,
      concert: prisma.concert,
      f1: prisma.f1,
    }[type];

    if (!table) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const result = await table.update({
      where: { id },
      data: { isActive: false },
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Deactivation Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
