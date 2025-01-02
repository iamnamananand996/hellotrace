/* eslint-disable @next/next/no-img-element */
import { Github, Linkedin } from "lucide-react";
import Img1 from "@/assets/1.jpeg";
import Img2 from "@/assets/2.jpeg";
import Img3 from "@/assets/3.jpeg";
import Img4 from "@/assets/4.jpeg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Vijay Subramanian",
    role: "Founder/CEO",
    image: Img1.src,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Linda Tran",
    role: "Co-founder / Product @ Trace | ex-Uber",
    image: Img2.src,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Gabriel Strauss",
    role: "Data Infrastructure Engineer",
    image: Img3.src,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Will Lyon",
    role: "Services Sales & GTM",
    image: Img4.src,
    github: "#",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <div className="py-28 px-4">
      <div className="container mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-white text-center mb-20">
          Meet The Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1E1E2E] rounded-lg p-6 flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-600 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-xl font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{member.role}</p>
              <div className="flex gap-3">
                {member.github && (
                  <a
                    href={member.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
