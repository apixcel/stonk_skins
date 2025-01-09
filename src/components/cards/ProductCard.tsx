import fonts from "@/fonts";
import { IProduct } from "@/mock/product";
import Image from "next/image";
import React from "react";
import CartIcon from "../icons/CartIcon";
import DarkRoundedBox from "../icons/DarkRoundedBox";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="p-[12px] pb-[26px] w-[369px] rounded-[24px] border-x-[1.5px] border-t-[1.5px] border-borderPrimary bg-secondaryBg backdrop-blur-[25px] relative">
      <div className="w-full h-[221px] bg-[#1C0829] center">
        <Image
          src={product.image}
          width={369}
          height={221}
          alt={product.productName}
        />
      </div>
      <div className="mt-[12px] px-[6] flex flex-col">
        <h2 className="text-white text-[32px] font-[500] leading-[118%] tracking-[-1.92px] line-clamp-1">
          {product.productName}
        </h2>

        <div className={fonts.dm_sans.className}>
          <p
            className={`text-[16px] font-[500] leading-[125%] tracking-[-0.096px] text-secondary mt-[8px]`}
          >
            Lorem ipsum dolor sit
          </p>

          <p className="text-[16px] font-[500] leading-[125%] tracking-[-0.096px] text-[#f5f5f54f] mt-[12px] mb-[8px]">
            Suggested Price ${product.suggestedPrice}
          </p>

          <div className="flex items-center justify-start gap-[16px]">
            <p className="text_gradient text-[24px] font-[500] leading-[118%] tracking-[-1.44px]">
              {product.currentPrice}%
            </p>

            <p className="text-[#FF6565] font-[500] text-[16px] leading-[125%] tracking-[-0.096px]">
              {product.discount}%
            </p>
          </div>
        </div>
      </div>

      <button className="w-[62px] h-[62px] center absolute bottom-[22px] right-[19px]">
        <CartIcon className="relative z-[2]" />
        <DarkRoundedBox className="absolute top-0 left-0  z-[1]" />
      </button>
    </div>
  );
};

export default ProductCard;
