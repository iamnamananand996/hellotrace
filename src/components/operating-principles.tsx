import { Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const principles = [
  {
    title: "Semantic-Driven Standardization",
    description:
      "Build reusable and composable data blocks (entities, relationships, metrics, etc.) to represent business semantics, reducing redundancy and enabling scalable, high-value workflows.",
  },
  {
    title: "Empowerment Through Automation",
    description:
      "Automate complex metric transformations and processes to boost the productivity of data teams and provide intuitive interfaces for business teams to engage with data meaningfully.",
  },
  {
    title: "Holistic Connectivity Across Metrics",
    description:
      "Go beyond isolated metric calculations by enabling interconnected planning, experimentation, root cause analysis, and outcome measurement workflows to maximize organizational impact.",
  },
  {
    title: "Experience-Driven Innovation",
    description:
      "Leverage the founding team's deep expertise in data-driven organizations and strong backing from top-tier investors to pioneer the next wave of advancements in modern data platforms.",
  },
];

const GradientCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Card className="relative bg-[#1E1E2E] border-0 overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
    <div className="p-6">
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  </Card>
);

export default function OperatingPrinciples() {
  return (
    <div className="md:px-12 lg:px-24 py-28">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-4">
            <div className="w-16 h-16 rounded-lg bg-purple-900/20 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-4xl font-semibold text-white">
              Operating Principles
            </h1>
            <p className="text-gray-400 text-lg">
              Operating Principles guide how we operate at Enterpret. They add
              clarity when we are evaluating and prioritizing between projects.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-6">
            {principles.map((principle, index) => (
              <GradientCard
                key={index}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
