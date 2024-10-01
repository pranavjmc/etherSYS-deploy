import { generateId } from "@/lib/id"

export type ProductConfig = typeof productConfig

export const productConfig = {
  categories: [
    {
      id: generateId(),
      name: "Solutions",
      description: "The best skateboards for all levels of skaters.",
      image: "/images/categories/skateboard-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "EtherAIOT",
          description: "The board itself.",
        },
        {
          id: generateId(),
          name: "Ether Data Lake",
          description: "The wheels that go on the board.",
        },
        
      ],
    },
    {
      id: generateId(),
      name: "Products",
      description: "Stylish and comfortable skateboarding clothing.",
      image: "/images/categories/clothing-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "T-shirts",
          description: "Cool and comfy tees for effortless style.",
        },
        {
          id: generateId(),
          name: "Hoodies",
          description: "Cozy up in trendy hoodies.",
        },
        {
          id: generateId(),
          name: "Pants",
          description: "Relaxed and stylish pants for everyday wear.",
        },
        {
          id: generateId(),
          name: "Shorts",
          description: "Stay cool with casual and comfortable shorts.",
        },
        {
          id: generateId(),
          name: "Hats",
          description: "Top off your look with stylish and laid-back hats.",
        },
      ],
    },
    {
      id: generateId(),
      name: "About Us",
      description: "Stylish and comfortable skateboarding clothing.",
      image: "/images/categories/clothing-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "T-shirts",
          description: "Cool and comfy tees for effortless style.",
        },
        {
          id: generateId(),
          name: "Hoodies",
          description: "Cozy up in trendy hoodies.",
        },
        {
          id: generateId(),
          name: "Pants",
          description: "Relaxed and stylish pants for everyday wear.",
        },
        {
          id: generateId(),
          name: "Shorts",
          description: "Stay cool with casual and comfortable shorts.",
        },
        {
          id: generateId(),
          name: "Hats",
          description: "Top off your look with stylish and laid-back hats.",
        },
      ],
    },
  ]
}
