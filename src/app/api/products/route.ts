import { Product } from "@/app/types/type";
import { getAll, save } from "../../../../services/products";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
  const products:Product[] = getAll();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest, res: NextResponse) {
  try {
    const req = await request.json();
    console.log("Request Body:", req);

    save(req.id, req.name, req.description, req.price);
    const data:Product[]  = getAll()
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error parsing JSON or saving data:", error);

    return NextResponse.json(
      { error: "Invalid JSON format or error saving data" },
      { status: 500 }
    );
  }
}

