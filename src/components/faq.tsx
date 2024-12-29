"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

export default function FAQSection() {
  return (
    <div className="w-full max-w-3xl mx-auto pt-16 pb-32 px-4">
      <h2
        className={
          "text-5xl md:text-6xl font-medium text-center tracking-tighter mb-16"
        }
      >
        F.A.Q
      </h2>

      <div className="space-y-8">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="rounded-lg bg-white shadow-[0px_0px_20px_#8c45ff] hover:shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center gap-4"
      >
        <span className="text-black font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-950" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-950" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-950">{answer}</p>
        </div>
      )}
    </div>
  );
}

const faqData = [
  {
    question: "How does your solution help with business reviews?",
    answer:
      "Our solution streamlines and drives effective business reviews such as WBRs (Weekly Business Reviews) and MBRs (Monthly Business Reviews). It provides a centralized platform for data analysis and presentation, making it easier to conduct thorough and insightful reviews.",
  },
  {
    question: "Can your tool help in diagnosing variations in output KPIs?",
    answer:
      "Yes, our tool allows you to quickly diagnose and attribute ongoing variations in output KPIs. It provides real-time data analysis and visualization, helping you identify trends, anomalies, and potential causes for changes in your key performance indicators.",
  },
  {
    question:
      "How does your solution help understand the impact of initiatives on KPIs?",
    answer:
      "Our platform enables you to deeply understand how initiatives impact output KPIs. It provides correlation analysis and impact tracking, allowing you to measure and visualize the direct effects of your business initiatives on your key performance metrics.",
  },
  {
    question: "Is coding knowledge required to use your platform?",
    answer:
      "No, our platform allows you to operate directly on metrics, not datasets, with no code necessary. It's designed to be user-friendly and accessible to team members across various departments, regardless of their technical background.",
  },
  {
    question:
      "How does your solution help with aligning input and output metrics?",
    answer:
      "Our tool helps you connect input and output metrics to drive alignment across your organization. It provides a clear visualization of how input metrics influence output KPIs, fostering a better understanding of your business dynamics and promoting strategic alignment.",
  },
  {
    question: "Can your platform accommodate complex business models?",
    answer:
      "Yes, our platform allows you to express the nuances of your business model via metrics. It's flexible and customizable, enabling you to set up metric relationships that accurately reflect your unique business processes and dynamics.",
  },
  {
    question: "What are 'metric trees' and how do they work in your platform?",
    answer:
      "Metric trees are sets of related metrics that show hierarchical or causal relationships. Our platform allows you to effortlessly navigate these metric trees, providing a clear view of how different metrics relate to and influence each other across your business.",
  },
  {
    question: "Can metric trees span across different business functions?",
    answer:
      "Absolutely. Our metric trees can be cross-functional, spanning across growth, product, operations, and other departments. This enables a holistic view of your business metrics and facilitates cross-departmental analysis and collaboration.",
  },
  {
    question: "Does your platform offer any automation features?",
    answer:
      "Yes, our platform leverages automation to power 'always-on' metrics monitoring. This means your metrics are continuously updated and analyzed, providing real-time insights and alerting you to significant changes or trends without manual intervention.",
  },
];
