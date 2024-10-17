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
      <div className="grid sm:grid-cols-1 sm:h-full bg-cover bg-center gap-x-10 md:h-full md:grid-cols-1 lg:grid-cols-2 mob:h-full lg:h-screen mob:grid-cols-1 bg-gradient-to-r from-indigo-950 from-45% to-sky-900 to-80%">
        <PageHeader
          as="section"
          className="mx-auto items-center lg:gap-y-2 mob:gap-y-0 text-center sm:mt-24 lg:ml-24 mob:mx-6"
          withPadding
        >
          <PageHeaderHeading
            className="animate-fade-up tracking-wide text-white font-poppins lg:mx-0 font-light lg:ml-[-50px]"
            style={{
              animationDelay: "0.20s",
              animationFillMode: "both",
              whiteSpace: "nowrap",
            }}
          >
            <div className="flex lg:ml-0 mob:ml-10">
              One infrastructure to
              <WordRotate
                className="lg:text-4xl mob:text-2xl  font-light text-blue-600 dark:text-white mx-3 text-left font-poppins"
                words={[
                  "Connect",
                  "Build",
                  "Deploy",
                  "Collect",
                  "Scale",
                  "Secure",
                  "Analyze",
                ]}
              />{" "}
            </div>
            Digital Transformation end-to-end
          </PageHeaderHeading>
          <PageHeaderDescription
            className="max-w-[49.875rem] lg:ml-3 mob:ml-3 animate-fade-up tracking-wide text-gray-300 font-poppins font-normal lg:text-left mob:text-center mt-6"
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
            className="animate-fade-up lg:justify-start lg:ml-6 mob:justify-center mt-4"
            style={{ animationDelay: "0.40s", animationFillMode: "both" }}
          >
            <Link
              href="/products"
              className={cn(buttonVariants({ variant: "blue" }))}
            >
              Get Started
            </Link>
            <Link
              href="/dashboard/stores"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "tracking-wider"
              )}
            >
              Talk to Sales
            </Link>
          </PageActions>
        </PageHeader>
        <div className="justify-self-center">
          <div className="relative w-full h-auto lg:block mob:hidden lg:-left-60">
            <ConnectedDots />
          </div>
          <div className="relative lg:-right-9 mt-14">
            <Test />
          </div>
        </div>
      </div>

      <SecondSection />

      <Shell className="max-w-[1300px] gap-0">
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
