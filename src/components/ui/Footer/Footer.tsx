import Link from "next/link";
import React from "react";
import { titleFont } from "@/config/font";
export const Footer = () => {
  return (
    <div className="w-full flex justify-center text-xs mb-10 items-center">
      <Link href="/">
        <span className={` ${titleFont.className} antialiased font-bold mr-1`}>
          Teslo | Shop
        </span>
        <span className="mx-2">{new Date().getFullYear()}</span>
      </Link>
      <Link href="/">
        <span className={` ${titleFont.className} antialiased font-bold mx-2`}>
          Privacidad legal
        </span>
      </Link>
      <Link href="/">
        <span className={` ${titleFont.className} antialiased font-bold mx-2`}>
          Términos y condiciones
        </span>
      </Link>
    </div>
  );
};
