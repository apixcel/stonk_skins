import fonts from "@/fonts";
import { IFaq } from "@/types/faq";
import React from "react";
import AccordianArrowDown from "../icons/AccordianArrowDown";
import AccordianArrowUp from "../icons/AccordianArrowUp";

interface IProps {
  faq: IFaq;
  isOpen: boolean;
  onClick: () => void;
}
const FaqCard: React.FC<IProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="w-full rounded-[24px] bg-secondaryBg border-x-[1.5px] border-t-[1.5px] border-borderPrimary backdrop-blur-[25px] px-[31px] py-[24px] overflow-hidden">
      <div className="flex items-start justify-between">
        <h2 className="text-white text-[20px] sm:text-[32px] font-[500px] leading-[118%] tracking-[-1.2px] sm:tracking-[-1.92px]">
          {faq.question}
        </h2>
        <span className="shrink-0 w-auto cursor-pointer" onClick={onClick}>
          {isOpen ? <AccordianArrowUp /> : <AccordianArrowDown />}
        </span>
      </div>

      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          transition: "0.3s",
          overflow: "hidden",
        }}
        className={`${fonts.dm_sans.className} text-[16px] font-[500] leading-[125%] tracking-[-0.096px] text-secondary mt-[12px]`}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
