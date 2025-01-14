"use client";
import { IProduct } from "@/mock/product";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../cards/ProductCard";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";

interface IProps {
  categoryName: string;
  data: IProduct[];
  uniqueId: string;
  className?: string;
}

const CategorySection: React.FC<IProps> = ({
  categoryName,
  data,
  uniqueId,
  className,
}) => {
  const prevId = "prev" + uniqueId;
  const nextId = "next" + uniqueId;
  return (
    <div className="w-full">
      <div className="layout_container flex items-center justify-between w-full mb-[67px] sm:mb-[31px]">
        <h1 className="text-white text-[40px] sm:text-[48px] font-[500] leading-[118%] tracking-[-2.88px]">
          {categoryName}
        </h1>

        <div className="center gap-[11px] hidden sm:flex">
          <button id={prevId}>
            <PrevIcon />
          </button>
          <button id={nextId}>
            <NextIcon />
          </button>
        </div>
      </div>
      <div className={`w-full ${className || ""}`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: `#${prevId}`,
            nextEl: `#${nextId}`,
          }}
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="h-full w-full"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 3.8,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((product, i) => (
            <SwiperSlide key={product.id + i} className="!flex justify-center">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySection;
