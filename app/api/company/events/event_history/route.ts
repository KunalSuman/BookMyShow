import {PrismaClient} from '@prisma/client';
import { NextRequest , NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(req : NextRequest){
    const data = await req.json();
    console.log(data);
    try{
    const user = await prisma.event_history.create({
        //above line translates into INSERT INTO event (name, description, date, location, company_id)
        data: {
            event_id: data.event_id,
            sender_id: data.sender_id,
            transaction: data.transaction_id,
            amount: data.amount,
            created_at: data.created_at
        }
        //above data push is donne as VALUES (data.name, data.description, data.date, data.location, data.company_id);
    });
    return NextResponse.json({user});
    //above return of data is being donr by RETURNING *
    }catch(e){
        console.log(e);
    }
}
