"use client";
import { Award, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800/40 to-slate-900" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <h2
          className={`mb-8 text-center text-3xl font-bold transition-all duration-1000 sm:mb-12 sm:text-4xl lg:text-5xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div
          className={`group relative transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="absolute inset-0 rounded-xl bg-linear-to-r from-cyan-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-500/50 sm:p-8">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-purple-600">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    MERN Stack
                  </h3>
                  <p className="text-sm text-cyan-300">Solitaire Infosys</p>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1i16JcAZ2ZAtB4PGwGEAUuz_ly3R3fcGP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
              >
                <ExternalLink size={16} />
                Certificate
              </a>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Completed a 6-week internship focused on full-stack web
              application development with MongoDB, Express.js, React.js, and
              Node.js, improving front-end and back-end development skills while
              contributing to real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
