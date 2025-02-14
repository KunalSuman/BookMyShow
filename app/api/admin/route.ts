import {PrismaClient} from '@prisma/client';
import { NextRequest , NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function POST(req : NextRequest){
    const data = await req.json();
    console.log(data);
    try{
    const user = await prisma.admin.create({
        //above line translates into INSERT INTO advertisment (name, description, date, location, company_id)
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
        }
        //above data push is donne as VALUES (data.name, data.description, data.date, data.location, data.company_id);
    });
    return NextResponse.json({user});
    //above return of data is being donr by RETURNING *
    }catch(e){
        console.log(e);
    }
}
