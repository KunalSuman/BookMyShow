import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const prisma = new PrismaClient();
    const data = await request.json();
    console.log(data);
    try {
        const music = await prisma.concert.create({
            data: {
                name: data.name,
                description: data.description,
                date: data.date,
                location: data.location,
                company_id: data.company_id,
                isOpera : data.isOpera,
            }
        });
        console.log(music)
        return NextResponse.json({ music });

    } catch (e) {

        const errorMessage = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ error: e });
    }
}
