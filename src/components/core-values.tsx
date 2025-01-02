import {
  Key,
  Heart,
  Rocket,
  Users,
  MessageSquare,
  Trophy,
  ThumbsUp,
} from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#1E1E2E] p-6 backdrop-blur-sm">
      <div className="mb-4 inline-block rounded-full bg-gradient-to-br from-purple-400 to-purple-600 p-2 text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function CoreValues() {
  const values = [
    {
      icon: <Key className="h-6 w-6" />,
      title: "Ownership Mentality",
      description:
        "Take responsibility, act with initiative, and contribute to the collective success of the team and organization.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Care and Collaboration",
      description:
        "Build a culture of mutual respect and support while fostering meaningful connections within the team.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Constructive Feedback",
      description:
        "Encourage open communication by giving and receiving actionable and direct feedback to drive personal and team growth.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Humble Growth",
      description:
        "Embrace humility and a desire to continuously learn, improve, and adapt.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Shared Success",
      description:
        "Align efforts towards common goals, celebrating wins together as a united team.",
    },
  ];

  return (
    <div className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-purple-900/50 p-3">
            <ThumbsUp className="h-6 w-6 text-purple-300" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white">Core Values</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Core Values are critical behavioral values that we hold everyone
            accountable for at HelloTrace.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
