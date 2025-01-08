import Banner from "@/components/Home/Banner";
import CategorySection from "@/components/Home/CategorySection";
import { categoryBaseProducts } from "@/mock/category";

const HomeView = () => {
  return (
    <main className="bg-[#220c30] w-full">
      <Banner />
      <div className="mt-[115px] flex flex-col gap-[166px]">
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
    </main>
  );
};

export default HomeView;
