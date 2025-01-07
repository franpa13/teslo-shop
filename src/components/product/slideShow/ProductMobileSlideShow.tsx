"use client";
// Import Swiper React components
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slideShow.css";

import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "88vw",

          height: "500px",
        }}
        pagination
        navigation={true}
        modules={[Pagination, FreeMode, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              width={300}
              height={300}
              src={`/products/${image}`}
              alt={title}
              className=" object-fill "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
