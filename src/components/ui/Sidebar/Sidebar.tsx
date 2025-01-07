"use client";
import Link from "next/link";
import React from "react";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import useMenuStore from "@/store/menuItems/menuItems";
import clsx from "clsx";
export const Sidebar = () => {
  const menu = useMenuStore((state) => state.menu);
  const close = useMenuStore((state) => state.close);
  return (
    <div className="">
      {/* BLACK BACKGROUND */}
      {menu && (
        <div  className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* BLUR */}
      {menu && (
        <div onClick={close} className="fade-in fixed top-0 cursor-pointer left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
      )}
  
        <nav className={
            clsx(
                "fixed p-5 right-0 top-0 w-[350px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-200",
                {"translate-x-full": !menu}
            )
        }>
          <IoCloseOutline
            size={35}
            className="absolute top-5 right-1 cursor-pointer"
            onClick={close}
          ></IoCloseOutline>
          <div className="relative mt-12">
            <IoSearchOutline
              size={22}
              className="absolute  bottom-2 "
            ></IoSearchOutline>
            <input
              type="text"
              placeholder="Buscar"
              className="w-full bg-gray-50 rounded pl-8 py-1 pr-10 border-b-2 text-lg border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          <Link
            href={"/"}
            className="flex items-center mt-7 p-2 rounded-md hover:bg-gray-100 transition-all "
          >
            <IoPersonOutline size={20}></IoPersonOutline>
            <span className="ml-3 text-lg ">Perfil</span>
          </Link>
          <Link
            href={"/"}
            className="flex items-center mt-7 p-2 rounded-md hover:bg-gray-100 transition-all "
          >
            <IoTicketOutline size={20}></IoTicketOutline>
            <span className="ml-3 text-lg ">Ordenes</span>
          </Link>
          <Link
            href={"/"}
            className="flex items-center mt-7 p-2 rounded-md hover:bg-gray-100 transition-all "
          >
            <IoLogInOutline size={20}></IoLogInOutline>
            <span className="ml-3 text-lg ">Ingresar</span>
          </Link>
          <Link
            href={"/"}
            className="flex items-center mt-7 p-2 rounded-md hover:bg-gray-100 transition-all "
          >
            <IoLogOutOutline size={20}></IoLogOutOutline>
            <span className="ml-3 text-lg ">Salir</span>
          </Link>

          <div className="h-px w-full bg-gray-200 my-5"></div>

          <Link
            href={"/"}
            className="flex items-center mt-7 p-2 rounded-md hover:bg-gray-100 transition-all "
          >
            <IoShirtOutline size={20}></IoShirtOutline>
            <span className="ml-3 text-lg ">Products</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-7 p-2 rounded-md hover:bg-gray-100 transition-all "
          >
            <IoTicketOutline size={20}></IoTicketOutline>
            <span className="ml-3 text-lg ">Ordenes</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-7 p-2 rounded-md hover:bg-gray-100 transition-all "
          >
            <IoPeopleOutline size={20}></IoPeopleOutline>
            <span className="ml-3 text-lg ">Usuarios</span>
          </Link>
        </nav>
      
    </div>
  );
};
