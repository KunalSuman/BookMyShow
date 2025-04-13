import {PrismaClient} from '@prisma/client';
import { NextRequest , NextResponse } from 'next/server';

export async function POST(req : NextRequest){
    const prisma = new PrismaClient();
    const data = await req.json();
    console.log(data);
    try{
    const race = await prisma.f1.create({
        data: {
            name: data.name,
            description: data.description,
            date: data.date,
            location : data.location,
            company_id : data.company_id,
        }
    });
    console.log(race)
    return NextResponse.json({race});

    }catch(e){

        const errorMessage = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({error: e});
    }
}
