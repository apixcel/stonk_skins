import fonts from "@/fonts";
import Image from "next/image";
import LoginWithSteamShapeButton from "../shared/ui/LoginWithSteamShapeButton";

const StartTrading = () => {
  return (
    <div className="mt-[233px] relative w-full">
      <Image
        src={"/assets/images/ornamentGroup.png"}
        alt=""
        width={1440}
        height={640}
        className=" absolute top-[-154%] left-0 z-[2]"
      />
      <div className="relative layout_container w-full h-[309px] rounded-[41px] overflow-hidden">
        <Image
          src={"/assets/images/startTrading/startTradingBg.png"}
          alt=""
          width={1148}
          height={309}
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />

        <div className="relative z-[5] w-full h-full center flex-col gap-[11px] max-w-[601px] mx-auto">
          <h2 className="text-white text-center text-[48px] font-[500] leading-[118%] tracking-[-2.88px]">
            Start Trading Smarter with StonksSkins Today!
          </h2>
          <p
            className={`${fonts.dm_sans.className} text-secondary font-[700] leading-[125%] tracking-[-0.96px] text-[16px] text-center max-w-[450px]`}
          >
            Join thousands of gamers already buying, selling, and trading skins
            securely and hassle-free.
          </p>
          <LoginWithSteamShapeButton className="mt-[5px]" />
        </div>
      </div>
    </div>
  );
};

export default StartTrading;
