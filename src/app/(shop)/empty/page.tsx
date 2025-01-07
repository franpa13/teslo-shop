import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="flex  items-center justify-center h-[400px]">
      <IoCartOutline size={80} className="mx-5" />
      <div className="flex flex-col items-center ">
        <h2 className="text-2xl font-bold">Tu carrito esta vacio</h2>
        <Link href="/" className="underline text-blue-500">
          Regresar a la tienda
        </Link>
      </div>
    </div>
  );
}
