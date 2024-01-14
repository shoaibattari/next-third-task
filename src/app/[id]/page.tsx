import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `product `,
  description: "Generated by product",
};

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function GiveProduct(props: { params: { id: string } }) {
  const product = await getData(props.params.id);
  console.log(product);

  return (
    <div>
      <div className="flex  justify-center mt-32">
        <div className=" w-1/2  divide-y">
          
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-1xl sm:text-2xl text-gray-500">
                {product.description}
              </p>
              <p className="mt-4 text-1xl sm:text-2xl text-gray-500">
                {product.price}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
