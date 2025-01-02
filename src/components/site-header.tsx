"use client";

import Link from "next/link";
import SiteLogo from "@/assets/Trace-Logo.svg";
import { CodeXml, Feather, MenuIcon, Newspaper, Wallet2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ActionButton } from "@/components/action-button";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className={
          "md:py-4 border-b max-md:backdrop-blur md:border-none sticky top-0 z-10"
        }
      >
        <div className={"container max-md:px-4"}>
          <div
            className={
              "flex items-center justify-between md:border md:px-3 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur "
            }
          >
            <Link href={"/"}>
              <div
                className={"inline-flex items-center justify-center my-auto"}
              >
                <SiteLogo />
              </div>
            </Link>
            <section className={"max-md:hidden"}>
              <nav className={"flex gap-8 items-center text-sm"}>
                <Link
                  href={"https://hellotrace.app/"}
                  className={"text-white/70 hover:text-white transition"}
                >
                  Product
                </Link>
                <Link
                  href={"https://www.hellotrace.io/blog"}
                  className={"text-white/70 hover:text-white transition"}
                >
                  Blog
                </Link>
                <Link
                  href={"#"}
                  className={"text-white/70 hover:text-white transition"}
                >
                  Pricing
                </Link>
                <Link
                  href={"/company"}
                  className={"text-white/70 hover:text-white transition"}
                >
                  Company
                </Link>
              </nav>
            </section>
            <section className={"flex max-md:gap-4 items-center"}>
              <Link href={"https://www.hellotrace.io/request-a-demo"}>
                <ActionButton label={"TRY TRACE"} />
              </Link>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <MenuIcon
                    className={
                      "size-9 md:hidden hover:text-white/70 transition"
                    }
                  />
                </SheetTrigger>
                <SheetContent side={"top"} className={"p-8"}>
                  <div className={"inline-flex items-center center gap-3"}>
                    <div
                      className={
                        "inline-flex items-center justify-center my-auto"
                      }
                    >
                      <SiteLogo />
                    </div>
                  </div>
                  <div className={"my-4"}>
                    <nav className={"grid gap-4 items-center text-lg"}>
                      <Link
                        href={"#"}
                        className={
                          "flex items-center gap-3 text-white/70 hover:text-white transition"
                        }
                      >
                        <Feather className={"size-6"} />
                        Product
                      </Link>
                      <Link
                        href={"#"}
                        className={
                          "flex items-center gap-3 text-white/70 hover:text-white transition"
                        }
                      >
                        <CodeXml className={"size-6"} />
                        Blog
                      </Link>
                      <Link
                        href={"#"}
                        className={
                          "flex items-center gap-3 text-white/70 hover:text-white transition"
                        }
                      >
                        <Wallet2 className={"size-6"} />
                        Pricing
                      </Link>
                      <Link
                        href={"#"}
                        className={
                          "flex items-center gap-3 text-white/70 hover:text-white transition"
                        }
                      >
                        <Newspaper className={"size-6"} />
                        Company
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </section>
          </div>
        </div>
      </header>
    </>
  );
}
