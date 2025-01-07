import { Product } from "@/interfaces";
import Image from "next/image";
import { ProductGirdItem } from "./ProductGirdItem";


interface Props {
  products: Product[];
}
export const ProductGrid = ({ products }: Props) => {

    
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => {
        return (
            <ProductGirdItem key={product.slug} product={product} ></ProductGirdItem>
          
        );
      })}
    </div>
  );
};
