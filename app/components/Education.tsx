"use client";
import { Calendar, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Education = () => {
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

  const education = [
    {
      course: "Non-medical",
      place: "Indus Public School Kharar, Mohali",
      period: "2018 - 2020",
    },
    {
      course: "Bachelor in Computer Application",
      place: "Chandigarh Group of College, Jhanjeri, Mohali",
      period: "2020 - 2023",
    },
    {
      course: "Master in Computer Application (Distance Education)",
      place: "Chandigarh University, Mohali",
      period: "2024 - Present",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800/40 to-slate-900" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          className={`mb-8 text-center text-3xl font-bold transition-all duration-1000 sm:mb-12 sm:text-4xl lg:mb-16 lg:text-5xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item, index) => (
            <div
              key={item.course}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-cyan-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative h-full rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-500/50">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-purple-600">
                    <GraduationCap className="text-white" size={22} />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-cyan-300">
                    <Calendar size={16} />
                    <span>{item.period}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {item.course}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                  {item.place}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
