"use client";

import { LobbySkeleton } from "./skeleton/HeroSection";
import { SiteHeader } from "@/skate-components/layouts/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <LobbySkeleton />
    </main>
  );
}
