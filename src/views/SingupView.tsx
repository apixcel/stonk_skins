import ArrowAngelUp from "@/components/icons/ArrowAngelUp";
import LargeGradientUnionIcon from "@/components/icons/LargeGradientUnionIcon";
import SmallGradientUnionIcon from "@/components/icons/SmallGradientUnionIcon";
import SteamIcon from "@/components/icons/SteamIcon";
import Input from "@/components/shared/ui/Input";
import Label from "@/components/shared/ui/Label";
import fonts from "@/fonts";
const SingupView = () => {
  return (
    <div className="w-[576px] p-[32px] rounded-[24px] bg-[#2c1638e6] border-x-[1.5px] border-t-[1.5px] border-borderPrimary flex flex-col gap-[32px] items-center justify-center">
      <div className="flex flex-col gap-[12px]">
        <h1 className="text-white text-[40px] font-[500] leading-[120%] tracking-[-2.4px] text-center">
          Sign Up
        </h1>
        <p
          className={`text-secondary text-[14px] font-[500] leading-[171.429%] tracking-[-0.14px] text-center ${fonts.dm_sans.className}`}
        >
          Buy, sell, and trade skins securely with unbeatable prices and
          transparency
        </p>
      </div>
      <button className="w-[512px] h-[64px] relative">
        <LargeGradientUnionIcon className="absolute left-0 top-0 z-[1]" />
        <span className="relative z-[2] w-full flex items-center justify-between">
          <span
            className={`${fonts.dm_sans.className} text-[24px] font-[700]  leading-[32px] tracking-[-0.144px] text-secondary pl-[25px]`}
          >
            Sign up with Steam
          </span>
          <SteamIcon />
        </span>
      </button>

      <div className="flex items-center justify-between w-full gap-[8px]">
        <span className="h-[1px] w-full bg-borderPrimary" />

        <span
          className={`shrink-0 ${fonts.dm_sans.className} text-[16px] font-[500] leading-[125%] tracking-[-0.096px] text-[#f5f5f58f]`}
        >
          or
        </span>
        <span className="h-[1px] w-full bg-borderPrimary" />
      </div>

      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex flex-col gap-[12px] w-full">
          <Label htmlFor="email">Email or Username</Label>
          <Input id="email" placeholder="Email or Username" />
        </div>
        <div className="flex flex-col gap-[12px] w-full">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="********" />{" "}
        </div>
        <div className="flex flex-col gap-[12px] w-full">
          <Label htmlFor="c_password">Confirm Password</Label>
          <Input id="c_password" placeholder="********" />{" "}
        </div>

        <button className="w-[173px] h-[52px] relative">
          <SmallGradientUnionIcon className="absolute left-0 top-0 z-[1]" />
          <span className="relative z-[2] w-full flex items-center justify-between">
            <span
              className={`${fonts.dm_sans.className} text-secondary text-[16px] font-[500]  leading-[125%] tracking-[-0.096px] pl-[35px]`}
            >
              Sign Up
            </span>
            <span className="w-[52px] aspect-square center">
              <ArrowAngelUp />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SingupView;
