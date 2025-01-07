import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
interface Props {
  params: {
    id: string;
  };
}
export default function ({ params }: Props) {
  const { id } = params;
  // VERIFICAR DE DONDE ES EL ID
  // redirect("/");

  return (
    <div className="flex flex-col items-center justify-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col   md:w-[1000px] ">
        <Title title={`Orden nro ${id}`} subtitle="" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* CARRITO */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex  items-center py-2 px-3.5 text-base font-bold text-white  mb-5",
                { "bg-red-500": false, "bg-green-500": true }
              )}
            >
              <IoCardOutline size={30}></IoCardOutline>
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Orden pagada</span>
            </div>

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
                  <p>Subtotal: {product.price * 3}</p>
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>
          {/* CHECKOUT */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl font-bold mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Nombre: Francisco Paredes</p>
              <p>Direccion: Av. Siempre Viva 123</p>
              <p>Ciudad: Springfield</p>
              <p>Codigo postal: 123456</p>
              <p>Telefono: 987654321</p>
            </div>
            <div className="w-full h-[0.5px] rounded bg-gray-300 mb-10"></div>
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
            <div className="mt-3">
              {/* Disclamer */}
              <div
                className={clsx(
                  "flex  items-center py-2 px-3.5 text-base font-bold text-white  mb-5",
                  { "bg-red-500": false, "bg-green-500": true }
                )}
              >
                <IoCardOutline size={30}></IoCardOutline>
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">Orden pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
