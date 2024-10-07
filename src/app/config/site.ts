

import { productConfig } from "./product"
import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

const links = {
  x: "/",
  github: "/",
  githubAccount: "/",
  discord: "/",
  calDotCom: "/",
}

export const siteConfig = {
  name: "Skateshop",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js.",
  url: "/",
  links,
  mainNav: [
    {
      title: "Platform",
      items: [
        {
          title: "EtherIoT Solution",
          href: "/",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Ether Data Lake",
          href: "/",
          description: "Build your own custom skateboard.",
          items: [],
        },
      ],
    },
    ...productConfig.categories.map((category) => ({
      title: category.name,
      items: [
        // {
        //   title: "All",
        //   href: `/categories/${slugify(category.name)}`,
        //   description: `All ${category.name}.`,
        //   items: [],
        // },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.name,
          href: `/categories/${slugify(category.name)}/${slugify(subcategory.name)}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
  ],
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "/",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "/",
          external: true,
        },
        {
          title: "craft.mxkaske.dev",
         href: "/",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "/",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/",
          external: false,
        },
        {
          title: "Contact",
          href: "/",
          external: false,
        },
        {
          title: "Terms",
          href: "/",
          external: false,
        },
        {
          title: "Privacy",
          href: "/",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "X",
          href: "/",
          external: false,
        },
        {
          title: "GitHub",
          href: "/",
          external: false,
        },
        {
          title: "Discord",
          href: "/",
          external: false,
        },
        {
          title: "cal.com",
          href: "/",
          external: false,
        },
      ],
    },
    {
      title: "Lofi",
      items: [
        {
          title: "beats to study to",
          href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
          external: true,
        },
        {
          title: "beats to chill to",
          href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
          external: true,
        },
        {
          title: "a fresh start",
          href: "https://www.youtube.com/watch?v=rwionZbOryo",
          external: true,
        },
        {
          title: "coffee to go",
          href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
          external: true,
        },
      ],
    },
  ] 
}
