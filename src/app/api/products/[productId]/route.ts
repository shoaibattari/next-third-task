import { NextRequest, NextResponse } from "next/server";

import { getById } from "../../../../../services/products";

interface IParams {
  params: { productId: number };
}
export async function GET(request: NextRequest, { params }: IParams) {
  try {
   
    const { productId } = params;
    
    const product = getById(Number(productId));
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}
