import Image from "next/image";
import { titleFont } from "@/config/font";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";


const products = initialData.products
export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="all products" className="mb-2"></Title>
      <ProductGrid  products={products}></ProductGrid>
    </>
  );
}
