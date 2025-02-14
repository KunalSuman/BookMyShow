import {PrismaClient} from '@prisma/client';
import { NextRequest , NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(req : NextRequest){
    const data = await req.json();
    console.log(data);
    try{
    const user = await prisma.company.create({
        //above line translates into INSERT INTO company (email, name, password, phone,balance)
        data: {
            email: data.email,
            name: data.name,
            password: data.password,
            phone : data.phone,
            balance : data.balance
        }
        //above data push is donne as VALUES (data.email, data.name, data.password, data.phone, data.balance);
    });
    return NextResponse.json({user});
    //above return of data is being donr by RETURNING *
    }catch(e){
        console.log(e);
    }
}
