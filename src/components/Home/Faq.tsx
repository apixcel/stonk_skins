"use client";
import fonts from "@/fonts";
import { faqData } from "@/mock/faq";
import Image from "next/image";
import { useState } from "react";
import FaqCard from "../cards/FaqCard";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="w-full relative">
      <div className="layout_container w-full flex items-start justify-start gap-[0] mt-[173px] relative z-[5]">
        <div className="w-[389px] shrink-0 flex flex-col gap-[12px]">
          <h3 className="text-white text-[48px] font-[500] leading-[118%] tracking-[-2.88px]">
            Any Questions? Look Here
          </h3>

          <p
            className={`${fonts.dm_sans.className} text-[16px] font-[500] leading-[125%] tracking-[-0.096px] text-secondary `}
          >
            Get answers to all your questions
          </p>
        </div>

        <div className="flex flex-col gap-[14px] w-full">
          {faqData.map((faq, index) => (
            <FaqCard
              faq={faq}
              key={index}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index)}
            />
          ))}
        </div>
      </div>

      <span className="w-[435px] aspect-square glowGradient absolute right-[-185px] top-[55px] rounded-full z-[1]" />
      <Image
        src={"/assets/images/faq/faq_ornament.png"}
        width={274}
        height={396}
        alt={""}
        className="absolute left-0 top-[-48px] z-[1]"
      />
    </div>
  );
};

export default Faq;
