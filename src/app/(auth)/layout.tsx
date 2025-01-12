import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper relative min-h-screen w-full">
      <Image
        src={"/assets/images/hero/bannerLg.png"}
        alt=""
        width={1440}
        height={1900}
        className="absolute top-0 left-0 z-[1] w-full h-full"
      />
      <div className="relative z-[3] w-full h-full flex flex-col">
        <div className="w-full shrink-0 flex items-center justify-start pt-[24px] pl-[80px] gap-[12px]">
          <Image
            src={"/assets/svg/logo.svg"}
            width={116}
            height={55}
            alt={"stonk skins"}
          />
        </div>

        <div className="w-full h-full center">{children}</div>
      </div>
      <Image
        src={"/assets/images/hero/heroShade.png"}
        alt=""
        width={810}
        height={1029}
        className="absolute top-0 left-0 z-[2] w-auto h-full"
      />
      <Image
        src={"/assets/images/hero/heroShade.png"}
        alt=""
        width={810}
        height={1029}
        className="absolute top-0 right-0 z-[2] w-auto h-full rotate-[-180deg]"
      />
    </div>
  );
};

export default layout;
