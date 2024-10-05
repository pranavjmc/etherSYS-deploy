import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ContentSection } from "@/components/ui/content-section";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { ProductCardSkeleton } from "@/skate-components/product-card-skeleton";
import { Shell } from "@/components/ui/shell";
import { StoreCardSkeleton } from "@/skate-components/store-card-skeleton";

import { CategoryCardSkeleton } from "@/components/ui/category-card-skelton";
import { url } from "inspector";
import IconSvg from "./IconSvg";
import SecondSection from "./SecondSection";


export function LobbySkeleton() {
  return (
    <>
      <div
        className="grid sm:grid-cols-1 sm:h-full bg-cover bg-center gap-x-10 md:h-full md:grid-cols-1 lg:grid-cols-2 lg:h-[100vh] mob:grid-cols-1"
        style={{ backgroundImage: "url('/bg-image.jpg')" }}
      >
        <PageHeader
          as="section"
          className="mx-auto items-center gap-2 text-center sm:mt-24"
          withPadding
        >
          <PageHeaderHeading
            className="animate-fade-up tracking-wide text-white"
            style={{ animationDelay: "0.20s", animationFillMode: "both" }}
          >
            ETHERSYS
          </PageHeaderHeading>
          <PageHeaderDescription
            className="max-w-[46.875rem] animate-fade-up text-orange-100"
            style={{ animationDelay: "0.30s", animationFillMode: "both" }}
          >
            Experience the power of EtherAIoT in driving IIoT 4.0/5.0 for
            Digital Transformation.
          </PageHeaderDescription>

          <PageActions
            className="animate-fade-up"
            style={{ animationDelay: "0.40s", animationFillMode: "both" }}
          >
            <Link
              href="/products"
              className={cn(buttonVariants({ variant: "lime" }))}
            >
              Demo
            </Link>
            <Link
              href="/dashboard/stores"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Cart
            </Link>
          </PageActions>
        </PageHeader>
        <div className="justify-self-center">
          <IconSvg />
        </div>
      </div>

      <SecondSection />

      <Shell className="max-w-6xl gap-0">
        {/* <section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))}
      </section> */}
        <ContentSection
          title="Featured products"
          description="Explore products from around the world"
          href="/products"
          linkText="View all products"
          className="pt-14 md:pt-20 lg:pt-24"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </ContentSection>
        <ContentSection
          title="Featured stores"
          description="Explore stores from around the world"
          href="/stores"
          linkText="View all stores"
          className="py-14 md:py-20 lg:py-24"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <StoreCardSkeleton key={i} />
          ))}
        </ContentSection>
      </Shell>
    </>
  );
}
