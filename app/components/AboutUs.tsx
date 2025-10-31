"use client";
import { useEffect, useRef, useState } from "react";
import { Code, Sparkles, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800/50 to-slate-900" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" /> */}
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700">
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Aspiring Full Stack and Blockchain Developer skilled in HTML, CSS, Bootstrap, and React.js. Passionate about building responsive UIs, dynamic web apps, and decentralized solutions. Eager to learn and innovate, applying both front-end and back-end expertise to deliver efficient, high-quality projects in collaboration with cross-functional teams.
                </p>
                {/* <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  My journey in tech started with a curiosity for how things
                  work, and has evolved into a love for crafting elegant
                  solutions to complex problems.
                </p> */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "React",
                    "Next.js",
                    "JavaScript",
                    "TypeScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Redux",
                    "Tailwind CSS",
                    "Styled Components",
                    "HTML5",
                    "CSS3",
                    "Docker",
                    "Git",
                    "GitHub Actions",
                    "Vercel",
                    "Rest API",
                    "Figma",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs sm:text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: Code,
                  title: "Clean Code",
                  desc: "Writing maintainable and scalable code",
                },
                {
                  icon: Sparkles,
                  title: "Creative Solutions",
                  desc: "Innovative approaches to challenges",
                },
                {
                  icon: Rocket,
                  title: "Fast Delivery",
                  desc: "Efficient project execution",
                },
              ].map(({ icon: Icon, title, desc }, index) => (
                <div
                  key={index}
                  className="group flex gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
