import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";
import { Product } from "./types/type";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products ",
  description: "API Routes with Data Fetching for products",
};

async function getData() {
  const res = await fetch("https://next-third-task.vercel.app/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data:Product[] = await getData();

  return (
    <div  >
      <div className="text-center flex justify-around p-6 ">
        <p>NextJS Internship </p>
        <p>Shoaib Memon</p>
        <p>API Routes and Data Fetching: </p>
        <p>TSK-000-68</p>
      </div>
      <div className="text-center">
      {data.map((prod: Product) => (
        <div key={prod.id}>
          <Link href={`/${prod.id}`}>
            <h1>{prod.name}</h1>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}
