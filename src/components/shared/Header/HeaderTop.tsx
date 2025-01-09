import ButtonCta from "@/components/icons/ButtonCta";
import ButtonUnionIcon from "@/components/icons/ButtonUnionIcon";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L16.657 16.657M16.657 16.657C17.3999 15.9141 17.9892 15.0322 18.3912 14.0615C18.7933 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94939 18.7933 8.90908 18.3912 7.93845C17.9892 6.96782 17.3999 6.08588 16.657 5.34299C15.9141 4.6001 15.0322 4.01081 14.0615 3.60877C13.0909 3.20672 12.0506 2.99979 11 2.99979C9.94939 2.99979 8.90908 3.20672 7.93845 3.60877C6.96782 4.01081 6.08588 4.6001 5.34299 5.34299C3.84266 6.84332 2.99979 8.87821 2.99979 11C2.99979 13.1218 3.84266 15.1567 5.34299 16.657C6.84332 18.1573 8.87821 19.0002 11 19.0002C13.1218 19.0002 15.1567 18.1573 16.657 16.657Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
