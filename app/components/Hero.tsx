"use client";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-900/20 via-slate-900 to-purple-900/20" />

      <FloatingIcons />

      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-48 h-48 mx-auto rounded-full bg-linear-to-br from-cyan-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-linear-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-6xl font-bold text-white">
                  RS
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Ramandeep singh
        </h1>

        <h2 className="text-2xl md:text-4xl text-cyan-300 mb-6 font-light tracking-wide">
          Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Blending creativity and code to build modern digital solutions.
          Driven by a passion for seamless user experiences and robust, scalable systems.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <button className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
            <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
              <Download size={20} />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative px-8 py-4 border-2 border-purple-500 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
            <span className="relative z-10 text-purple-400 group-hover:text-white font-semibold transition-colors duration-300">
              Hire Me
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          {[
            { icon: Github, href: "https://github.com/RaMandeep2002", color: "hover:text-cyan-400" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ramandeep-singh-849a121bb/", color: "hover:text-blue-400" },
            { icon: Mail, href: "ramandeepsingh1511@gmail.com", color: "hover:text-purple-400" },
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              className={`p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-cyan-500 ${color}`}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full p-1 mb-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto animate-pulse" />
        </div>
        <span className="text-cyan-300 text-xs tracking-wide mt-1">
          Scroll down
        </span>
      </div>
    </section>
  );
}
