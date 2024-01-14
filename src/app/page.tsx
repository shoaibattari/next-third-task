import Image from "next/image";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products ",
  description: "API Routes with Data Fetching for products",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
type Product = {
  id?: number;
  name: string;
  description: string;
  price: string;
};
export default async function Home() {
  const data = await getData();

  return (
    <div>
      <div className="text-center flex justify-around p-6 ">
        <p>NextJS Internship </p>
        <p>Shoaib Memon</p>
        <p>API Routes and Data Fetching: </p>
        <p>TSK-000-68</p>
      </div>
      {data.map((prod: Product) => (
        <div key={prod.id}>
          <Link href={`/${prod.id}`}>
            <h1>{prod.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
