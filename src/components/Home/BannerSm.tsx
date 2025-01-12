import fonts from "@/fonts";
import { serviceData } from "@/mock/service";
import Image from "next/image";
import LoginWithSteamShapeButton from "../shared/ui/LoginWithSteamShapeButton";

const BannerSm = () => {
  return (
    <div className="w-full min-h-[823px] relative overflow-hidden sm:hidden">
      <div className=" w-full h-full flex flex-col items-start justify-center  layout_container relative z-[3] bottom-[-40px]">
        <h1 className="text-white font-[500] text-[40px] leading-[140%] tracking-[-2.4px] max-w-[727px]">
          The Ultimate <span className="text-[#E9AE82]">CS 2 Marketplace</span>{" "}
          for Gamers Who Mean Business
        </h1>
        <p
          className={`text-secondary ${fonts.dm_sans.className} text-[16px] text-start leading-[125%] tracking-[-0.096px] mt-[14px]`}
        >
          Buy, sell, and trade skins securely with unbeatable prices and
          transparency
        </p>
        <LoginWithSteamShapeButton className="mt-[24px]" />
      </div>

      <div className="w-full aspect-[393/542] relative z-[2]">
        <span
          className="w-full h-[160px] absolute top-0 left-0 z-[2] rotate-[180deg]"
          style={{
            background:
              "linear-gradient(180deg, rgba(34, 12, 48, 0.00) 0%, #220C30 100%)",
          }}
        />
        <Image
          src="/assets/images/hero/bannerSm.png"
          width={393}
          height={542}
          alt=""
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />

        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[379px] border-x-[1px] border-t-[1px] border-borderPrimary backdrop-blur-[25px] bg-secondaryBg px-[17px] py-[20px] grid grid-cols-2 gap-x-[25px] gap-y-[24px] z-[50] rounded-[24px]">
          {serviceData.map(({ Icon, label }, i) => (
            <div
              key={i + label}
              className="flex items-center justify-start gap-[8px]"
            >
              <span className="w-[44px] h-[44px] relative center">
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
                className={`${fonts.dm_sans.className} text-secondary text-[14px] leading-[142.857%] tracking-[-0.084px]`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSm;
