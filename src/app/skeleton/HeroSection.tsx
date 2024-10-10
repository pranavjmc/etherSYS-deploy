import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
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
import IconSvg from "./IconSvg";
import SecondSection from "./SecondSection";
import Test from "./Test";
import ConnectedDots from "./ConnectedDots";
import WordRotate from "@/components/ui/word-rotate";


export function LobbySkeleton() {
  return (
    <>
      <div className="grid sm:grid-cols-1 sm:h-full bg-cover bg-center gap-x-10 md:h-full md:grid-cols-1 lg:grid-cols-2 mob:h-full lg:h-full mob:grid-cols-1 bg-gradient-to-r from-indigo-950 from-45% to-sky-900 to-80%">
        <PageHeader
          as="section"
          className="mx-auto items-center gap-2 text-center sm:mt-28 lg:mx-10 mob:mx-6"
          withPadding
        >
          <PageHeaderHeading
            className="animate-fade-up tracking-wide text-white font-poppins"
            style={{
              animationDelay: "0.20s",
              animationFillMode: "both",
              whiteSpace: "nowrap",
            }}
          >
            <div className="flex">
              One infrastructure to
              <WordRotate
                className="lg:text-4xl mob:text-2xl  font-bold text-blue-500 dark:text-white mx-3 text-center"
                words={[
                  "connect",
                  "build",
                  "deploy",
                  "collect",
                  "scale",
                  "secure",
                  "analyze",
                ]}
              />{" "}
            </div>
            Digital Transformation end-to-end
          </PageHeaderHeading>
          <PageHeaderDescription
            className="max-w-[49.875rem] lg:ml-2 animate-fade-up text-gray-400 font-poppins font-semibold tracking-wide text-justify mt-6"
            style={{ animationDelay: "0.30s", animationFillMode: "both" }}
          >
            The EtherAIoT Suite powers digital transformation across IIoT
            4.0/5.0, BMS, Fleet, green energy, and healthcare, delivering
            tangible results from prototype to production. It offers a one-stop
            solution, covering everything from devices to edge computing,
            multi-protocol support, cloud integration, applications, and
            advanced analytics.
          </PageHeaderDescription>

          <PageActions
            className="animate-fade-up"
            style={{ animationDelay: "0.40s", animationFillMode: "both" }}
          >
            <Link
              href="/products"
              className={cn(buttonVariants({ variant: "lime" }))}
            >
              Get Started
            </Link>
            <Link
              href="/dashboard/stores"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Talk to Sales
            </Link>
          </PageActions>
        </PageHeader>
        <div className="justify-self-center mr-10">
          <div className="relative">
            <ConnectedDots />
          </div>
          <div className="relative">
            <Test />
          </div>
        </div>
      </div>

      <SecondSection />

      <Shell className="max-w-6xl gap-0">
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
