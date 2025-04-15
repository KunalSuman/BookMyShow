import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { event_id } = await req.json();

    if (!event_id) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    // Check the F1 events table
    const f1Event = await prisma.f1.findUnique({ where: { id: event_id } });
    if (f1Event) {
      return NextResponse.json({ event: f1Event, type: "f1" });
    }

    // Check the movie table
    const movieEvent = await prisma.movie.findUnique({ where: { id: event_id } });
    if (movieEvent) {
      return NextResponse.json({ event: movieEvent, type: "movie" });
    }

    // Check the concert table
    const concertEvent = await prisma.concert.findUnique({ where: { id: event_id } });
    if (concertEvent) {
      return NextResponse.json({ event: concertEvent, type: "concert" });
    }

    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  } catch (error: any) {
    console.error("Error fetching event details:", error);
    return NextResponse.json(
      { error: "Error fetching event details", message: error.message },
      { status: 500 }
    );
  }
}
