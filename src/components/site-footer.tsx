import SiteLogo from "@/assets/Trace-Logo.svg";
import Link from "next/link";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function SiteFooter() {
  return (
    <footer className=" text-white pb-8 border-t-2">
      {/* Curved edge */}

      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className={"flex items-center gap-3"}>
              <div className={"inline-flex items-center justify-center"}>
                <SiteLogo />
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-[10px] mb-4 tracking-wider">
              SOLUTIONS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  For Business
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  For Sales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  For Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Apps & Integrations */}
          <div>
            <h3 className="font-semibold text-[10px] mb-4 tracking-wider">
              APPS & INTEGRATIONS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  Web Platform
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  SDKs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4 tracking-wider text-[10px]">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.hellotrace.io/blog"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="https://traceio.notion.site/Open-Roles-at-Trace-0d02d8d813414fb6bac4e930b847c8de"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  Privacy & Security
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.hellotrace.io/privacy-policy"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:opacity-80 text-muted-foreground"
                >
                  Terms and Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
      </div>
      <div className="border-t">
        <div className="container flex flex-col md:flex-row justify-between items-center pt-8  border-white/10">
          <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              ©️ 2024 hellotrace.io
            </p>
          </div>
          <div className="flex gap-6">
            <ul className={"flex justify-center gap-3 text-white/40"}>
              <li className={"hover:text-white cursor-pointer"}>
                <LinkedInLogoIcon className="size-6" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
