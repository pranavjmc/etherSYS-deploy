"use client"

import * as React from "react"
import Link from "next/link"
import type { MainNavItem } from "@/types"

import { siteConfig } from "@/app/config/site"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/skate-components/icons"

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link href="/Route" className="hidden items-center space-x-2 lg:flex">
        <img src="/images/logo/ethersys/Logo-07.svg" width={200} height={180} />
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.[0]?.items ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-auto text-base bg-transparent text-gray-300 hover:bg-transparent hover:text-gray-300 data-[active]:bg-accent/0 data-[state=open]:bg-accent/0">
                {items[0].title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                  {items[0].items.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}
          {items
            ?.filter((item) => item.title !== items[0]?.title)
            .map((item) =>
              item?.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="h-auto capitalize text-base bg-transparent text-gray-300 hover:bg-transparent hover:text-gray-300 data-[active]:bg-accent/0 data-[state=open]:bg-accent/0">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                item.href && (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "h-auto bg-transparent"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )
            )}
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-gray-300 hover:bg-transparent hover:text-gray-300"
                )}
              >
                Customer
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none font-poppins">{title}</div>
          <p className="line-clamp-2 text-base leading-snug text-muted-foreground font-poppins">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
