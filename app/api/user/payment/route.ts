import {PrismaClient} from '@prisma/client';
import { NextRequest , NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(req : NextRequest){
    const data = await req.json();
    console.log(data);
    try{
    const user = await prisma.payment.create({
        //above line translates into INSERT INTO payment (email, name, password, phone,balance)
        data: {
            sender_id: data.sender_id,
            receiver_id: data.receiver_id,
            amount: data.amount,
            location: data.location,
            details : data.details,
        }
        //above data push is donne as VALUES (data.email, data.name, data.password, data.phone, data.balance);
    });
    return NextResponse.json({user});
    //above return of data is being donr by RETURNING *
    }catch(e){
        console.log(e);
    }
}
