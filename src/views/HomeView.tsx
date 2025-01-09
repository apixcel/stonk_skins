import Banner from "@/components/Home/Banner";
import CategorySection from "@/components/Home/CategorySection";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
import { categoryBaseProducts } from "@/mock/category";
import Image from "next/image";

const HomeView = () => {
  return (
    <main className="bg-[#220c30] w-full overflow-x-hidden  max-w-[1440px] mx-auto">
      <Banner />
      <div className="mt-[115px] relative">
        <span className="w-[437px] aspect-square rounded-full glowGradient absolute top-[30%] left-[-137px] z-[1]" />
        <span className="w-[440px] aspect-square rounded-full glowGradient absolute top-[70%] right-[-189px] z-[1]" />
        <Image
          src={"/assets/images/category/ornament_1.png"}
          width={325}
          height={57}
          alt=""
          className="absolute top-[37%] left-[30%] z-[3]"
        />
        <Image
          src={"/assets/images/category/ornament_2.png"}
          width={325}
          height={57}
          alt=""
          className="absolute top-[72%] left-[0%] z-[3]"
        />

        <div className="flex flex-col gap-[166px] relative z-[2]">
          <CategorySection
            categoryName="Category Name"
            data={categoryBaseProducts}
            uniqueId={"1"}
          />
          <CategorySection
            categoryName="Category Name"
            data={categoryBaseProducts}
            uniqueId="2"
          />
          <CategorySection
            categoryName="Category Name"
            data={categoryBaseProducts}
            uniqueId="3"
          />
        </div>
      </div>
      <HowItWorks />
      <Testimonials />
    </main>
  );
};

export default HomeView;
