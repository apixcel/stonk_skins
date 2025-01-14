import Banner from "@/components/Home/Banner";
import BannerSm from "@/components/Home/BannerSm";
import CategorySection from "@/components/Home/CategorySection";
import Faq from "@/components/Home/Faq";
import HowItWorks from "@/components/Home/HowItWorks";
import StartTrading from "@/components/Home/StartTrading";
import Testimonials from "@/components/Home/Testimonials";
import LoginWithSteamShapeButton from "@/components/shared/ui/LoginWithSteamShapeButton";
import RenderVerticalStripe from "@/components/shared/ui/RenderVerticalStripe";
import { categoryBaseProducts } from "@/mock/category";
import Image from "next/image";

const HomeView = () => {
  return (
    <main className="bg-[#220c30] w-full overflow-hidden wrapper">
      {/* ❓❓ wondering why this is here? answer: i got a weird problem with the login button if i dont put this here the button svg dont appear on the other section in smaller screen. idk  what the problem was */}
      <div className="invisible w-0 h-0 overflow-hidden">
        <LoginWithSteamShapeButton />
      </div>

      <Banner />
      <BannerSm />
      <div className="mt-[115px] relative">
        <RenderVerticalStripe count={2} />
        <span className="w-[437px] aspect-square rounded-full glowGradient absolute top-[30%] left-[-137px] z-[1]" />
        <span className="w-[440px] aspect-square rounded-full glowGradient absolute top-[70%] right-[-189px] z-[1]" />
        <Image
          src={"/assets/images/category/rare_ornament.png"}
          width={323}
          height={84}
          alt=""
          className="absolute top-[-19px] sm:top-[-1%] left-[0%] z-[3]"
        />
        <Image
          src={"/assets/images/category/ornament_1.png"}
          width={325}
          height={57}
          alt=""
          className="absolute top-[35%] sm:top-[37%] left-[38%] sm:left-[30%] z-[3]"
        />
        <Image
          src={"/assets/images/category/ornament_2.png"}
          width={325}
          height={57}
          alt=""
          className="absolute top-[69%] sm:top-[72%] left-[-28%] sm:left-[0%] z-[3]"
        />
        <div className="flex flex-col gap-[86px] sm:gap-[166px] relative z-[2] ">
          <CategorySection
            categoryName="Category Name"
            data={categoryBaseProducts}
            uniqueId={"1"}
            className="pl-[20px] xl:pl-[50px]"
          />
          <CategorySection
            categoryName="Category Name"
            data={categoryBaseProducts}
            uniqueId="2"
            className="pr-[20px] xl:pr-[50px]"
          />
          <CategorySection
            categoryName="Category Name"
            data={categoryBaseProducts}
            uniqueId="3"
            className="px-[20px] xl:px-[50px]"
          />
        </div>
      </div>
      <div className="w-full relative">
        <RenderVerticalStripe count={3} />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <StartTrading />
      </div>
    </main>
  );
};

export default HomeView;
