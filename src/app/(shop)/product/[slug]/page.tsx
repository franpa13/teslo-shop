import {
  ProductMobileSlideShow,
  ProductSlideShow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}
const products = initialData.products;
export default function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = products.find((product) => product.slug === slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-10 grid md:grid-cols-3 gap-3">
      {/* Mobile SlideShow */}

      <div className="col-span-1 md:col-span-2  ">
        <ProductMobileSlideShow
          className="block md:hidden   "
          title={product.title}
          images={product.images}
        ></ProductMobileSlideShow>

        {/* Slideshow */}

        <ProductSlideShow
          className="hidden md:block"
          title={product.title}
          images={product.images}
        ></ProductSlideShow>
      </div>
      {/* Detalles */}
      <div className="col-span-1 px-0 md:px-5  ">
        <h1 className={`${titleFont.className} antialiased fonr-bold`}>
          {product?.title}
        </h1>
        <p className="text-lg mb-5 ">${product?.price}</p>
        {/* Selector de tallas */}

        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        ></SizeSelector>
        {/* Selector de cantidad */}
        <QuantitySelector
          quantity={1}
          maxQuantity={product.inStock}
        ></QuantitySelector>
        {/* Button */}
        <button className="btn-primary my-5">Agregar al carrito</button>
        {/*Descripcion*/}
        <h3 className="font-bold text-sm ">Descripcion</h3>
        <p className="font-light">{product?.description}</p>
      </div>
    </div>
  );
}
