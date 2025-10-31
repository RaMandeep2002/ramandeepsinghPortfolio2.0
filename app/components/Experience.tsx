"use client";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [starPositions, setStarPositions] = useState<Array<{top: string, left: string, delay: string, opacity: number}>>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Generate random positions only on client side to avoid hydration mismatch
    setStarPositions(
      Array.from({ length: 20 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        opacity: Math.random() * 0.5,
      }))
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Mern Stack Student",
      company: "Solitaire Infosys",
      period: "2022 - 2022",
      achievements: [
        "Completed hands-on training in the MERN stack, including MongoDB, Express.js, React, and Node.js.",
        "Developed and deployed multiple CRUD web applications independently.",
        "Gained experience working in a collaborative team environment using Git and GitHub.",
        "Built RESTful APIs and integrated them with front-end applications.",
        "Learned fundamentals of modern front-end and back-end web development workflows.",
      ],
    },
    {
      role: "Blockchain Student",
      company: "ASB (Antier School of BlockTech)",
      period: "2023 - 2023",
      achievements: [
        "Completed comprehensive training in blockchain fundamentals and smart contract development using Solidity.",
        "Built and tested smart contracts using Hardhat and Mocha in development projects.",
        "Worked on decentralized application (dApp) prototypes with hands-on experience in JavaScript, Node.js, and web3 concepts.",
        "Collaborated in a team to design token systems and implement contract logic.",
        "Developed problem-solving and debugging skills within the blockchain development life-cycle.",
      ],
    },
    {
      role: "Blockchain Developer",
      company: "Virtual IT Technology",
      period: "2023 - 2024",
      achievements: [
        "Developed and deployed blockchain solutions, including writing smart contracts in Solidity for enterprise clients.",
        "Collaborated with cross-functional teams to integrate blockchain features with full-stack applications.",
        "Used Hardhat and Mocha to test and optimize smart contracts for security and efficiency.",
        "Implemented APIs and backend logic in Node.js to enable decentralized features.",
        "Helped troubleshoot and debug blockchain-based platforms through full development lifecycle.",
        "Wrote documentation and technical specifications for blockchain projects.",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800/30 to-slate-900" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {starPositions.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-purple-500 to-cyan-500" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-8 sm:mb-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`md:flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 lg:gap-8`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-4 lg:pr-8" : "md:text-left md:pl-4 lg:pl-8"
                  }`}
                >
                  <div className="group relative">
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <div className="p-2 bg-linear-to-br from-cyan-500 to-purple-600 rounded-lg">
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1 tracking-tight">
                            {exp.role}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium rounded-full w-fit">
                            {exp.company}
                          </span>
                        </div>
                      </div>

                      <div className={`flex items-center gap-2 text-slate-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Calendar size={16} />
                        <span className="text-sm sm:text-base">{exp.period}</span>
                      </div>

                      <ul className="space-y-2 sm:space-y-3 mt-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 group"
                          >
                            <span className="text-slate-300 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md border border-cyan-500/10 group-hover:border-purple-400/40 transition-all duration-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center items-center">
                  <div className="w-4 h-4 bg-linear-to-br from-cyan-500 to-purple-600 rounded-full border-4 border-slate-900 group-hover:scale-150 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
