"use client";

import { LobbySkeleton } from "./skeleton/HeroSection";
import { SiteHeader } from "@/skate-components/layouts/site-header";
import PreFooter from "./skeleton/PreFooter";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <LobbySkeleton />
      <PreFooter/>
    </main>
  );
}
