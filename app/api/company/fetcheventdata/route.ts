import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  // Destructure company_id from the body
  const { company_id } = await request.json();
  console.log("company_id:", company_id);

  try {
    const movies = await prisma.movie.findMany({
      where: {
        company_id: company_id,
      },
    });
    const concerts = await prisma.concert.findMany({
      where: {
        company_id: company_id,
      },
    });
    const f1Events = await prisma.f1.findMany({
      where: {
        company_id: company_id,
      },
    });

    // Return events in one object
    return NextResponse.json({ movies, concerts, f1Events });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error fetching user history" });
  }
}
