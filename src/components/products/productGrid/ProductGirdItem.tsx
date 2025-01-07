"use client";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface Props {
  product: Product;
}
export const ProductGirdItem = ({ product }: Props) => {
  const [hover, setHover] = useState( product.images[0]);
  return (
    <Link href={`/product/${product.slug}`} className="flex flex-col justify-center items-center rounded-md overflow-hidden fade-in">
      <Image
        src={`/products/${hover}`}
        alt={`${product.title}`}
        className="w-full object-cover rounded"
        width={500}
        height={500}
      
        onMouseEnter={() => setHover(product.images[1])}
        onMouseLeave={() => setHover(product.images[0])}
      ></Image>
      <div className="p-4 flex flex-col ">
       {product.title}
        <span key={product.slug} className="font-bold">
          ${product.price}
        </span>
      </div>
    </Link>
  );
};
