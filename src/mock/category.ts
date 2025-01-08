import { ICategory } from "@/types/category";
import { IProduct } from "./product";

export const categoryData: ICategory[] = [
  {
    label: "C",
    subCategories: [
      {
        label: "Sub-Category 1",
        products: [
          {
            productName: "Product 1",
            suggestedPrice: 10,
            image: "/assets/images/cs_go_ak47.png",
          },
          {
            productName: "Product 1",
            suggestedPrice: 10,
            image: "/assets/images/cs_go_ak47.png",
          },
          {
            productName: "Product 1",
            suggestedPrice: 10,
            image: "/assets/images/cs_go_ak47.png",
          },
          {
            productName: "Product 1",
            suggestedPrice: 10,
            image: "/assets/images/cs_go_ak47.png",
          },
          {
            productName: "Product 1",
            suggestedPrice: 10,
            image: "/assets/images/cs_go_ak47.png",
          },
          {
            productName: "Product 1",
            suggestedPrice: 10,
            image: "/assets/images/cs_go_ak47.png",
          },
          {
            productName: "Product 1",
            suggestedPrice: 10,
            image: "/assets/images/cs_go_ak47.png",
          },
          {
            productName: "Product 1",
            suggestedPrice: 10,
            image: "/assets/images/cs_go_ak47.png",
          },
        ],
      },
      {
        label: "Sub-Category 2",
        products: [],
      },
    ],
  },
  {
    label: "D",
    subCategories: [],
  },
  {
    label: "E",
    subCategories: [],
  },
  {
    label: "F",
    subCategories: [],
  },
  {
    label: "G",
    subCategories: [],
  },
  {
    label: "H",
    subCategories: [],
  },
  {
    label: "I",
    subCategories: [],
  },
  {
    label: "j",
    subCategories: [],
  },
];

export const categoryBaseProducts: IProduct[] = [
  {
    id: 1,
    productName: "AK-47 | Redline",
    description: "Lorem ipsum dolor sit",
    suggestedPrice: 687.58,
    currentPrice: 528.69,
    discount: "-20%",
    status: "Tradable",
    image: "/assets/images/redline-ak.png",
  },
  {
    id: 2,
    productName: "AK-47 | Case Hardened",
    description: "Lorem ipsum dolor sit",
    suggestedPrice: 687.58,
    currentPrice: 528.69,
    discount: "-20%",
    status: "Tradable",
    image: "/assets/images/caseHardened-ak.png",
  },
  {
    id: 3,
    productName: "AK-47 | Green Laminate",
    description: "Lorem ipsum dolor sit",
    suggestedPrice: 687.58,
    currentPrice: 528.69,
    discount: "-20%",
    status: "Tradable",
    image: "/assets/images/greenLaminate-ak.png",
  },
  {
    id: 4,
    productName: "AK-47 | Redline",
    description: "Lorem ipsum dolor sit",
    suggestedPrice: 687.58,
    currentPrice: 528.69,
    discount: "-20%",
    status: "Tradable",
    image: "/assets/images/redline-ak.png",
  },
  {
    id: 5,
    productName: "AK-47 | Case Hardened",
    description: "Lorem ipsum dolor sit",
    suggestedPrice: 687.58,
    currentPrice: 528.69,
    discount: "-20%",
    status: "Tradable",
    image: "/assets/images/caseHardened-ak.png",
  },
  {
    id: 6,
    productName: "AK-47 | Green Laminate",
    description: "Lorem ipsum dolor sit",
    suggestedPrice: 687.58,
    currentPrice: 528.69,
    discount: "-20%",
    status: "Tradable",
    image: "/assets/images/greenLaminate-ak.png",
  },
];
