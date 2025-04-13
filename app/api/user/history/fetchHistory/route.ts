import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request : NextRequest){
    const prisma = new PrismaClient();
    const data = await request.json();
    try{const user_history = await prisma.customer_history.findMany({
        where: {
            customer_id: data.customer_id,
        },
        })
        return NextResponse.json({user_history});
    }
        catch(e){
            console.log(e);
            return NextResponse.json({error: "Error fetching user history"});
        }

}
