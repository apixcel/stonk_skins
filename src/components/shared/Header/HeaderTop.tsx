import ButtonCta from "@/components/icons/ButtonCta";
import ButtonUnionIcon from "@/components/icons/ButtonUnionIcon";
import MagnifyingGlass from "@/components/icons/MagnifyingGlass";
import SearchbarShapeIcon from "@/components/icons/SearchbarShapeIcon";
import fonts from "@/fonts";
import Image from "next/image";
import Link from "next/link";
const HeaderTop = () => {
  return (
    <div className="layout_container pb-[16px] pt-[12px] border-b-[1px] border-borderPrimary flex items-center justify-between gap-[15px]">
      <div className="flex items-center justify-start gap-[31px]">
        <Image
          src={"/assets/svg/logo.svg"}
          width={116}
          height={55}
          alt={"stonk skins"}
        />

        <div className="relative w-[320px] h-[52px]">
          <SearchbarShapeIcon className="absolute top-0 left-0 z-[1]" />
          <form className="w-full relative h-full flex items-center justify-between z-[2] pl-[32px]">
            <input
              className="outline-none border-none bg-transparent text-[#F5F5F56E]"
              placeholder="Search Skins..."
            />

            <button
              type="submit"
              className="w-[52px] h-[52px] rounded-full center"
            >
              <MagnifyingGlass />
            </button>
          </form>
        </div>
      </div>
      <div
        className={`${fonts.dm_sans.className} flex items-center justify-start gap-[29px]`}
      >
        <Link
          href={"#"}
          className={`text-secondary text-[16px] font-[500] leading-[125%] tracking-[-0.096px] hover:underline`}
        >
          Market
        </Link>

        <div className="flex items-center gap-[11px]">
          <button className="center w-[123px] h-[51px] relative text-secondary text-[16px] font-[500] leading-[125%] tracking-[-0.096px]">
            <ButtonCta className="w-[123px] h-[51px] absolute left-0 top-0 fill-secondaryBg stroke-[1.5px] z-[1]" />
            Sign Up
          </button>
          <button className="center w-[187px] h-[51px] relative text-secondary text-[16px] font-[500] leading-[125%] tracking-[-0.096px]">
            <ButtonUnionIcon className="w-[187px] h-[51px] absolute left-0 top-0 fill-secondaryBg stroke-[1.5px] z-[1]" />
            <span className="relative z-[2]">Login with Steam</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
