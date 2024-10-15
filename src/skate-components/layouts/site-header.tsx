import { siteConfig } from "@/app/config/site"
import { CartSheet } from "@/skate-components/checkout/cart-sheet"
import { MainNav } from "@/skate-components/layouts/main-nav";
import { MobileNav } from "@/skate-components/layouts/mobile-nav";
import { AuthDropdown } from "@/skate-components/layouts/auth-dropdown";
import { SiteFooter } from "./site-footer";
import { ProductsCombobox } from "@/skate-components/products-combobox";
import { Button } from "../ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-950 from-45% to-sky-900 to-80%">
      <div className="container flex h-[70px] items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ProductsCombobox />
            {/* <CartSheet /> */}
            <AuthDropdown
              user={null}
              className="bg-blue-700 text-white shadow-sm shadow-sky-500/50 hover:bg-blue-800 font-semibold font-poppins tracking-wide"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}