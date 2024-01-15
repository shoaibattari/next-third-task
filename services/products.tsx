import fs from "fs";
import path from "path";
const filePath = path.join(process.cwd(), "data", "products.json");

export function getAll() {
  const data: any = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getById(id: number) {
  const data = getAll();
  return data.find((p: { id: number }) => p.id === (id));
}

export function save(
  id: string| number,
  name: string,
  description: string,
  price: string
) {
  const data = getAll();
  data.push({
    id: data.length + 1,
    name,
    description,
    price,
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}

