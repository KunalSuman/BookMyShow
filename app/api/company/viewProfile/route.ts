import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Get data from the request body
    const { email, company_id } = await req.json();

    if (!email || !company_id) {
      return NextResponse.json(
        { error: "Missing email or company_id" },
        { status: 400 }
      );
    }

    // Query the company where both the id and email match
    const company = await prisma.company.findFirst({
      where: {
        id: company_id,
        email: email,
      },
    });

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }

    // Return the company data in JSON format
    return NextResponse.json({ company });
  } catch (error: any) {
    console.error("Error fetching company profile:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 }
    );
  }
}
