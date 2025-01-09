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
}

const CategorySection: React.FC<IProps> = ({
  categoryName,
  data,
  uniqueId,
}) => {
  const prevId = "prev" + uniqueId;
  const nextId = "next" + uniqueId;
  return (
    <div className="w-full">
      <div className="layout_container flex items-center justify-between w-full mb-[31px]">
        <h1 className="text-white text-[48px] font-[500] leading-[118%] tracking-[-2.88px]">
          {categoryName}
        </h1>

        <div className="center gap-[11px]">
          <button id={prevId}>
            <PrevIcon />
          </button>
          <button id={nextId}>
            <NextIcon />
          </button>
        </div>
      </div>
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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3.8,
            spaceBetween: 20,
          },
        }}
      >
        {data.map((product, i) => (
          <SwiperSlide key={product.id + i}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySection;
