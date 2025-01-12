import fonts from "@/fonts";
import { howItWorksData } from "@/mock/howItWorks";
import Image from "next/image";
import LoginWithSteamShapeButton from "../shared/ui/LoginWithSteamShapeButton";

const HowItWorks = () => {
  return (
    <div className="w-full h-[752px] relative mt-[63px]">
      <Image
        src={"/assets/images/howItWorks/howItWorksBg.png"}
        alt=""
        width={1800}
        height={752}
        className={"w-full h-full absolute top-0 left-0 object-cover z-[1]"}
      />
      <Image
        src={"/assets/images/hero/brand_ambassador.png"}
        className="absolute bottom-[5px] left-[-120px] scale-x-[-1] z-[2]"
        alt="stonk skins"
        width={287}
        height={334}
      />
      <Image
        src={"/assets/images/howItWorks/howItWorksOverlay.png"}
        alt=""
        width={1800}
        height={752}
        className={"w-full h-full absolute top-0 left-0 object-cover z-[3]"}
      />
      <Image
        src={"/assets/images/howItWorks/hw_ornaments1.png"}
        alt=""
        width={457}
        height={147}
        className={"absolute bottom-[88px] right-0 z-[3]"}
      />
      <div className="center flex-col gap-[22px] w-full h-full relative z-[4]">
        <h2 className="text-white font-[500] text-center text-[48px] leading-[118%] tracking-[-2.88px]">
          How It Works
        </h2>
        <div className="w-[1140px] mx-auto flex items-start justify-between gap-[15px] relative">
          <span className="absolute top-[18%] left-[15%] h-[1px] w-[810px] border-[1px] border-dashed border-[#ffffff4f]" />
          {howItWorksData.map(({ description, label }, i) => {
            const descriptIonWidhts = [250, 324, 250];
            return (
              <div
                key={i + "work"}
                className="flex flex-col items-center gap-[25px]"
              >
                <span className="w-[69px] aspect-square rounded-full center relative">
                  <span className="relative z-[2] text-white text-[32px] font-[500] leading-[118%] tracking-[-1.92px]">
                    0{i + 1}
                  </span>
                  <svg
                    className="w-full h-full absolute top-0 left-0 z-[1]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                  >
                    <ellipse
                      cx="34.0225"
                      cy="34.5"
                      rx="34.0225"
                      ry="34.5"
                      fill="url(#paint0_linear_0_706)"
                    />
                    <ellipse
                      cx="34.0225"
                      cy="34.5"
                      rx="34.0225"
                      ry="34.5"
                      fill="url(#paint1_linear_0_706)"
                      fillOpacity="0.15"
                    />
                    <path
                      d="M67.295 34.5C67.295 53.1495 52.3886 68.25 34.0225 68.25C15.6564 68.25 0.75 53.1495 0.75 34.5C0.75 15.8505 15.6564 0.75 34.0225 0.75C52.3886 0.75 67.295 15.8505 67.295 34.5Z"
                      stroke="url(#paint2_linear_0_706)"
                      strokeOpacity="0.34"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_706"
                        x1="0"
                        y1="34.5"
                        x2="68.045"
                        y2="34.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E9AD83" />
                        <stop offset="1" stopColor="#9B1FE8" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_706"
                        x1="34.0225"
                        y1="0"
                        x2="34.0225"
                        y2="69"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#BEBEBE" />
                        <stop offset="0.84" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_0_706"
                        x1="34.0225"
                        y1="0"
                        x2="34.0225"
                        y2="69"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className={`flex flex-col gap-[4px]`}>
                  <h3 className="text-white text-center text-[32px] font-[500] leading-[118%] tracking-[-1.92px]">
                    {label}
                  </h3>

                  <p
                    className={`${fonts.dm_sans.className} text-secondary text-[16px] text-center leading-[125%] tracking-[-0.096px] font-[500]`}
                    style={{ maxWidth: descriptIonWidhts[i] + "px" }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <LoginWithSteamShapeButton className="mt-[18px]" />
      </div>
    </div>
  );
};

export default HowItWorks;
