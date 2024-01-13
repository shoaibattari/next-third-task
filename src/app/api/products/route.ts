import { getAll, save } from "../../../../services/products";
import { NextRequest, NextResponse } from "next/server";

type IProduct = {
  id?: number;
  name: string;
  description: string;
  price: string;
};

export async function GET(request: NextRequest) {
  const products = getAll();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest, res: NextResponse) {
  try {
    const req = await request.json();
    console.log("Request Body:", req);

    save(req.name, req.description, req.price);

    return NextResponse.json({});
  } catch (error) {
    console.error("Error parsing JSON or saving data:", error);

    return NextResponse.json(
      { error: "Invalid JSON format or error saving data" },
      { status: 500 }
    );
  }
}
