"use client";
// Import Swiper React components
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slideShow.css";
import { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs , Autoplay]}
        className="mySwiper2"
        autoplay = {{
          delay:2500
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              width={1024}
              height={500}
              src={`/products/${image}`}
              alt={title}
              className="rounded-lg object-fill "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide className="cursor-pointer" key={index}>
            <Image
              width={200}
              height={200}
              src={`/products/${image}`}
              alt={title}
              className="rounded-lg object-fill "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
