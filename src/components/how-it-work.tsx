import {
  BarChart3,
  GitBranch,
  LineChart,
  Puzzle,
  Settings,
  Share2,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-gray-900" />,
      title: "Streamline Business Reviews",
      description:
        "Streamline and drive effective business reviews (WBRs, MBRs)",
    },
    {
      icon: <Target className="w-6 h-6 text-gray-900" />,
      title: "Diagnose Variations",
      description:
        "Quickly diagnose and attribute ongoing variations in output KPIs",
    },
    {
      icon: <LineChart className="w-6 h-6 text-gray-900" />,
      title: "Impact Analysis",
      description: "Deeply understand how initiatives impact output KPIs",
    },
    {
      icon: <Settings className="w-6 h-6 text-gray-900" />,
      title: "No-Code Metrics",
      description:
        "Operate directly on metrics, not datasets; no code necessary",
    },
    {
      icon: <Share2 className="w-6 h-6 text-gray-900" />,
      title: "Drive Alignment",
      description: "Connect the input and output metrics to drive alignment",
    },
    {
      icon: <Puzzle className="w-6 h-6 text-gray-900" />,
      title: "Business Model Expression",
      description: "Express the nuances of your business model via metrics",
    },
    {
      icon: <GitBranch className="w-6 h-6 text-gray-900" />,
      title: "Metric Trees Navigation",
      description:
        'Effortlessly navigate "metric trees" - a set of related metrics',
    },
    {
      icon: <Workflow className="w-6 h-6 text-gray-900" />,
      title: "Cross-Functional Trees",
      description:
        "Trees can be cross-functional across growth, product or ops",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gray-900" />,
      title: "Automated Monitoring",
      description: 'Automation powers "always-on" metrics monitoring',
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={
            "text-5xl md:text-6xl font-medium text-center tracking-tighter mb-20"
          }
        >
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-[0px_0px_30px_#8c45ff] rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
