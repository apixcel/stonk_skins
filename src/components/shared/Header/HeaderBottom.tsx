"use client";
import fonts from "@/fonts";
import { categoryData } from "@/mock/category";
import { ICategory, ISubCategory } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const HeaderBottom = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    ICategory | undefined
  >(undefined);

  const [selectedSubCategory, setSelectedSubCategory] = useState<
    ISubCategory | undefined
  >(undefined);

  return (
    <div
      className={`flex items-center w-full border-b-[1px] border-borderPrimary pb-[18px] pt-[14px] relative ${fonts.dm_sans.className}`}
    >
      <div
        className="layout_container w-full  flex items-center justify-start gap-[33px] relative"
        onMouseLeave={() => {
          setSelectedCategory(undefined);
          setSelectedSubCategory(undefined);
        }}
      >
        {categoryData.map((category, index) => (
          <div
            key={index + category.label}
            className="flex items-center justify-start gap-[11px] text-white cursor-pointer relative  z-[5]"
            onMouseEnter={() => {
              setSelectedCategory(category);
              setSelectedSubCategory(category.subCategories[0]);
            }}
          >
            <h3
              className={`text-[16px] font-[500] leading-[50px] tracking-[-0.096px] ${selectedCategory?.label === category.label
                  ? "text_gradient"
                  : "text-white"
                }`}
            >
              Category
            </h3>
            <span className="px-[10px] py-[3px] bg-[#220E2D] rounded-[8px] border-[2px] border-[#432755]">
              <span
                className={`${selectedCategory?.label === category.label
                    ? "text_gradient"
                    : "text-white"
                  }`}
              >
                {category.label}
              </span>
            </span>
          </div>
        ))}

        {selectedCategory ? (
          <div
            className="w-full top-0 left-0 absolute pt-[70px] z-[2] opacity-0 translate-y-[-10px] transition-all duration-300 ease-in-out"
            style={{
              opacity: selectedCategory ? 1 : 0,
              transform: selectedCategory ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            <div className="w-full pt-[23px] pb-[33px] pl-[39px] pr-[24px] bg-[#2C1638] border-t-[1.5px] border-x-[1.5px] border-[#6e5f76] rounded-[24px] flex flex-col items-start justify-start gap-[23px]">
              <div className="flex items-center justify-start gap-[30px]">
                {selectedCategory.subCategories.map((subCategory, index) => (
                  <button
                    onMouseEnter={() => setSelectedSubCategory(subCategory)}
                    key={index + "sub_category" + subCategory.label}
                    className={`text-secondary text-[16px] font-[500] leading-[125%] tracking-[-0.096px] ${selectedSubCategory?.label === subCategory.label
                        ? "text_gradient"
                        : "text-white"
                      }`}
                  >
                    {subCategory.label}
                  </button>
                ))}
              </div>

              <div className="flex items-start justify-start gap-[26px]">
                {selectedSubCategory?.products?.map((product, index) => (
                  <Link
                    href={"#"}
                    key={index + "product"}
                    className="flex flex-col gap-[17px] border-t-[1.5px] border-x-[1.5px] p-[8px] rounded-[8px] cursor-pointer hover:border-borderPrimary border-transparent group/product"
                  >
                    <div className="w-[115px] h-[73.143px] bg-[#1C0829] rounded-[14.69px] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.productName}
                        width={115}
                        height={73}
                        className="object-contain w-full h-full group-hover/product:scale-[1.2] transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-secondary font-[500] tracking-[-0.09px] leading-[121.905%]">
                        {product.productName}
                      </h4>

                      <p className="text-[14px] text-secondary/30 font-[500] tracking-[-0.78px] leading-[140.659%]">
                        From ${product.suggestedPrice.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
};

export default HeaderBottom;
