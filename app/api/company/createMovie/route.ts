import { PrismaClient } from "@prisma/client";
import { NextRequest ,NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
    const data = await request.json();
    try {
        const movie = await prisma.movie.create({
            data: {
                name: data.name,
                description: data.description,
                date: data.date,
                location: data.location,
                company_id: data.company_id,
                isLux : data.isLux,
            }
        });
        console.log(movie)
        return NextResponse.json({ movie });

    } catch (e) {

        const errorMessage = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ error: e });
    }
}
