import MagnifyingGlass from "@/components/icons/MagnifyingGlass";
import MenuIcon from "@/components/icons/MenuIcon";
import TwoUniornIcon from "@/components/icons/TwoUniornIcon";
import Image from "next/image";
import Link from "next/link";

const HeaderSm = () => {
  return (
    <div className="w-full flex items-center justify-between gap-[15px] layout_container pt-[36px]">
      <Link href={"/"}>
        <Image
          src={"/assets/svg/logo.svg"}
          width={116}
          height={55}
          alt={"stonk skins"}
        />
      </Link>
      <div className="w-[103px] h-[52px] relative flex items-center justify-between gap-[15px]">
        <TwoUniornIcon className="absolute top-0 left-0 z-[1]" />
        <div className="w-full h-full relative z-[2] flex items-center justify-between">
          <button className="w-[51.5px] aspect-square center">
            <MagnifyingGlass />
          </button>
          <button className="w-[51.5px] aspect-square center">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSm;
