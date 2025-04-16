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
    return NextResponse.json({ f1Events: races, movies, concerts });
  } catch (error) {
    return NextResponse.json({error});
  }
}
