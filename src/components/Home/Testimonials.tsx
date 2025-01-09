"use client";
import fonts from "@/fonts";
import { reviewData } from "@/mock/review";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../cards/ReviewCard";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";
import SpecialStar from "../icons/SpecialStar";

const Testimonials = () => {
  return (
    <div className="w-full mt-[64px]">
      <div className="layout_container flex items-center justify-between w-full mb-[31px]">
        <h1 className="text-white text-[48px] font-[500] leading-[118%] tracking-[-2.88px]">
          Testimonials
        </h1>

        <div className="center gap-[11px]">
          <button id="testimonials-prev">
            <PrevIcon />
          </button>
          <button id="testimonials-next">
            <NextIcon />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: `#testimonials-prev`,
          nextEl: `#testimonials-next`,
        }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="h-full w-full"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3.8,
            spaceBetween: 22,
          },
        }}
      >
        {/* Excellent Card */}
        <SwiperSlide
          key="excellent-card"
          className="!flex items-start justify-end"
        >
          <div className="w-[271px] h-[366px] p-[20px] primaryGradient rounded-[19px] center flex-col gap-[11px]">
            <h1 className="text-white text-center text-[32px] font-[500] leading-[118%] tracking-[-1.92px]">
              Excellent
            </h1>
            <Image
              src={"/assets/images/icon_w.png"}
              alt="Trustpilot Icon"
              width={107}
              height={104}
            />
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between gap-[14px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SpecialStar key={`special-star-${i}`} />
                ))}
              </div>
              <p
                className={`${fonts.dm_sans.className} text-center text-secondary text-[16px] font-[500] leading-[125%] tracking-[-0.096px]`}
              >
                Based on <span className="underline">456 reviews</span>
              </p>
              <div className="center w-full gap-[4px]">
                <SpecialStar />
                <p
                  className={`${fonts.roboto.className} text-center text-white text-[16px] leading-[162.5%] tracking-[-0.096px]`}
                >
                  Trustpilot
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Review Cards */}
        {reviewData.map((review, index) => (
          <SwiperSlide key={`review-card-${index}`}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;