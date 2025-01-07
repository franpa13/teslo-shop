import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export default function () {
  // if(productsInCart.length === 0){
  //   redirect("/empty");
  // }
  return (
    <div className="flex flex-col items-center justify-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col   md:w-[1000px] ">
        <Title title="Carrito" subtitle="" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* CARRITO */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Agregar mas items </span>
            <Link href={"/"} className="underline mb-5">
              Continue comprando
            </Link>

            {/* PRODUCTOS */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex   mb-6">
                <Image
                  className="mr-5 rounded"
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                  width={100}
                  height={100}
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <QuantitySelector
                    quantity={3}
                    maxQuantity={10}
                  ></QuantitySelector>
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>
          {/* CHECKOUT */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl font-bold mb-2">Resumen de compra</h2>
            <div className="grid grid-cols-2 gap-4">
              <span>Nro de productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Impuestos</span>
              <span className="text-right">15%</span>

              <span className="font-bold  text-2xl">Total</span>
              <span className="text-right text-2xl">$100</span>
            </div>
            <div>
              <Link href={"/checkout/address"} className="flex btn-primary justify-center items-center w-full mt-5">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
