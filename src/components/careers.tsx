import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Careers() {
  return (
    <div className="text-white px-6 py-32 md:px-12 lg:px-24">
      <div className="container mx-auto space-y-24">
        {/* Header Section */}
        <div className="space-y-8 max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Careers
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Our founding team has deep experience in building data-centric orgs
            at Uber, Rent the Runway, Google, and Bitly. We are backed by
            Amplify and FirstMark - top tier investors in the data/dev space -
            to drive the next wave of the data revolution.
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500">
            Join the team
          </h2>
          <div>
            <Link href="https://traceio.notion.site/Open-Roles-at-Trace-0d02d8d813414fb6bac4e930b847c8de">
              <Button
                size="4xl"
                variant="outline"
                className="text-3xl border-2 hover:bg-white hover:text-black transition-colors px-40"
              >
                <Zap className="mr-2 h-10 w-10 text-fuchsia-500" />
                Open Positions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
