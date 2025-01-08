export interface ISubCategory {
  label: string;
  products: {
    label: string;
    price: number;
    image: string;
  }[];
}

export interface ICategory {
  label: string;
  subCategories: ISubCategory[];
}
