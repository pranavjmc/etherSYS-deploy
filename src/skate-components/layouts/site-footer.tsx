import Link from "next/link";

import { siteConfig } from "@/app/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/skate-components/icons";
import { JoinNewsletterForm } from "@/skate-components/join-newsletter-form";
import { ModeToggle } from "@/skate-components/layouts/mode-toggle";
import { Shell } from "@/skate-components/shell";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background bg-stone-700 text-gray-200 border-stone-600">
      <Shell>
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20 ">
          <section className="lg:ml-2">
            <Link href="/" className="flex w-fit items-center space-x-2">
              <img
                src="/images/logo/ethersys/Logo-07.svg"
                width={150}
                height={150}
              />
            </Link>
          </section>
          <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-gray-400 transition-colors hover:text-gray-200"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className="space-y-3">
            <h4 className="text-base font-medium">
              Subscribe to our newsletter
            </h4>
            <JoinNewsletterForm />
          </section>
        </section>
        <section className="flex items-center ">
          <div className="flex-1 lg:ml-3 text-left text-sm leading-loose text-gray-400">
            © 2024, Ether Daylight System.
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
                "hover:bg-stone-700"
              )}
            >
              <img
                src="/social-linkedin-svgrepo-com (1).svg"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
                "hover:bg-stone-700"
              )}
            >
              <img
                src="/social-twitter-svgrepo-com.svg"
                width={30}
                height={30}
              />
            </Link>
            {/* <ModeToggle /> */}
          </div>
        </section>
      </Shell>
    </footer>
  );
}
