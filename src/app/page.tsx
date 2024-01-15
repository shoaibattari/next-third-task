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
  const res = await fetch("https://shoaib-third-task.vercel.app/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: Product[] = await getData();

  return (
    <div>
      <div className="text-center flex justify-around p-6 bg-gray-400 text-white">
        <p>NextJS Internship </p>
        <p>Shoaib Memon</p>
        <p>API Routes and Data Fetching: </p>
        <p>TSK-000-68</p>
      </div>
      <div className="grid md:grid-cols-3 items-center md:ml-12">
        {data.map((prod: Product) => (
          <div
            className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0"
            key={prod.id}
          >
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {prod.name}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                    ${prod.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <Link
                  href={`/${prod.id}`}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <h1>product details</h1>
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  {prod.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
