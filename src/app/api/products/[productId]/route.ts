import { NextRequest, NextResponse } from "next/server";
import { getById } from "../../../../../services/products";

interface IParams {
  params: { productId: number };
}
export async function GET(request: NextRequest, { params }: IParams) {
  const { productId } = params;
  const product = getById(productId);
  return NextResponse.json(product);
}
