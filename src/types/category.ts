import { IProduct } from "@/mock/product";

export interface ISubCategory {
  label: string;
  products: Pick<IProduct, "productName" | "suggestedPrice" | "image">[];
}

export interface ICategory {
  label: string;
  subCategories: ISubCategory[];
}
