import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const races = await prisma.f1.findMany();
    const movies = await prisma.movie.findMany();
    const concerts = await prisma.concert.findMany();
    console.log(races);
    console.log(movies);
    console.log(concerts);
    // Rename races to f1Events here:
    return NextResponse.json({ f1Events: races, movies, concerts });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
