"use client";
import { titleFont } from "@/config/font";
import Link from "next/link";
import React from "react";
import useMenuStore from "@/store/menuItems/menuItems";
import {
  IoSearchCircleOutline,
  IoCartOutline,
  IoSearchOutline,
} from "react-icons/io5";

export const TopMenu = () => {
  const open = useMenuStore((state) => state.open);

  

  return (
    <nav className="flex px-5  md:px-5 justify-between items-center w-full pt-3">
      {/*Logo*/}
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span className={`${titleFont.className} antialiased font-bold`}>
            | Shop
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden  sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/men"}
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/women"}
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/kid"}
        >
          Niños
        </Link>
      </div>
      {/* Search/Cart/Menu */}
      <div className="flex items-center gap-3">
        <Link href={"/search"}>
          <IoSearchOutline className="w-6 h-6"></IoSearchOutline>
        </Link>
        <Link href={"/cart"}>
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2">
              3
            </span>
            <IoCartOutline className="w-6 h-6"></IoCartOutline>
          </div>
        </Link>
        <button onClick={open} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menu
        </button>
      </div>
    </nav>
  );
};
