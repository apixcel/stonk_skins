import fonts from "@/fonts";
import { serviceData } from "@/mock/service";
import Image from "next/image";
import LoginWithSteamShapeButton from "../shared/ui/LoginWithSteamShapeButton";

const Banner = () => {
  return (
    <div className="w-full h-[823px] relative overflow-hidden hidden sm:block">
      <div
        className="w-full layout_container h-full relative"
        style={{
          backgroundImage: `url("/assets/images/hero/bannerLg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-[11] w-full h-full flex flex-col items-start justify-center">
          <h1 className="text-white font-[500] text-[64px] leading-[118%] tracking-[-3.84px] max-w-[727px]">
            The Ultimate{" "}
            <span className="text-[#E9AE82]">CS 2 Marketplace</span> for Gamers
            Who Mean Business
          </h1>
          <p
            className={`text-secondary ${fonts.dm_sans.className} text-[16px] text-start leading-[125%] tracking-[-0.096px] mt-[13px]`}
          >
            Buy, sell, and trade skins securely with unbeatable prices and
            transparency
          </p>

          <LoginWithSteamShapeButton className="mt-[57px]" />
        </div>

        <div className="absolute bottom-0 left-0 w-full border-x-[1px] border-t-[1px] border-borderPrimary backdrop-blur-[25px] bg-secondaryBg px-[32px] py-[28px] flex items-center justify-start gap-[70px] z-[50] rounded-[24px]">
          {serviceData.map(({ Icon, label }, i) => (
            <div
              key={i + label}
              className="flex items-center justify-start gap-[16px]"
            >
              <span className="w-[60px] h-[60px] relative center">
                <Icon className={"relative top-0 left-0 z-[2]"} />
                <Image
                  src={"/assets/images/hero/iconBox.png"}
                  alt=""
                  width={60}
                  height={60}
                  className="w-full h-full left-0 top-0 absolute z-[1]"
                />
              </span>

              <span
                className={`${fonts.dm_sans.className} text-secondary text-[16px] leading-[125%] tracking-[-0.096px]`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* brand ambassador */}
        <Image
          src={"/assets/images/hero/brand_ambassador.png"}
          className="absolute bottom-[86px] right-[-83px] z-[30]"
          alt="stonk skins"
          width={445}
          height={531}
        />

        {/* side gradient iamge */}
        <Image
          src={"/assets/images/hero/heroShade.png"}
          alt=""
          width={810}
          height={1029}
          className="absolute top-0 left-0 z-[10] w-[810px] h-[1029px]"
        />
        <Image
          src={"/assets/images/hero/heroShade.png"}
          alt=""
          width={810}
          height={1029}
          className="absolute top-0 right-0 z-[10] w-[810px] h-[1029px] rotate-[-180deg]"
        />
      </div>
      {/* graphics */}
      <Image
        src={"/assets/images/hero/graphic_br.png"}
        alt=""
        width={810}
        height={1029}
        className="absolute bottom-[57px] right-0 z-[12] w-auto h-auto "
      />
    </div>
  );
};

export default Banner;
