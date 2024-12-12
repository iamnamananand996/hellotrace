import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full items-center bg-[#14141f] px-6">
      <div className="flex w-full max-w-[1400px] items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-semibold tracking-wider">TRACE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <Link
            href="/product"
            className="text-[#ff2ec4] font-medium tracking-wide"
          >
            PRODUCT
          </Link>
          <Link
            href="/blog"
            className="text-white/90 font-medium tracking-wide hover:text-white transition-colors"
          >
            BLOG
          </Link>
          <Link
            href="/company"
            className="text-white/90 font-medium tracking-wide hover:text-white transition-colors"
          >
            COMPANY
          </Link>
        </nav>

        <Button className="bg-[#6366f1] text-white hover:bg-[#6366f1]/90 px-8 rounded">
          TRY TRACE
        </Button>
      </div>
    </header>
  );
}
