import {PrismaClient} from '@prisma/client';
import { NextRequest , NextResponse } from 'next/server';
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
export async function POST(req : NextRequest){
    const data = await req.json();
    try{
    const user = await prisma.customer.create({
        //above line translates into INSERT INTO customer (email, name, password, phone,balance)
        data: {
            email: data.email,
            name: data.name,
            password: data.password,
            phone : data.phone,
            balance : data.balance
        }
        //above data push is donne as VALUES (data.email, data.name, data.password, data.phone, data.balance);
    });
    console.log(user);
    return NextResponse.json({user});
    //above return of data is being donr by RETURNING *
    }catch(e){
        return NextResponse.json({error: e});
    }
}
