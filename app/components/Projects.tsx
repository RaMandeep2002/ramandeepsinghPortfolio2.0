"use client";
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'StopHateAb',
      description: 'Developed a WordPress website using Elementor to promote awareness against hate activities. Integrated Contact Form 7 and eForm for seamless communication and data collection, ensuring a user-friendly and responsive design.',
      stack: ['WordPress', 'eForm', 'Contact Form 7', 'Caching'],
      gradient: 'from-cyan-500 to-blue-600',
      link: 'https://stophateab.ca/',
      code: null // Not open source
    },
    {
      title: 'Salmon Arm Taxi',
      description: 'For this project, I created the frontend for both the website and the admin panel to manage operations. I also developed APIs using Node.js (TypeScript) and integrated them with Redux Toolkit for state management. Additionally, we provided APIs to the app developer to enable features such as starting and stopping shifts, as well as starting and ending rides, ensuring seamless integration between the admin panel and the driver app.',
      stack: ['TypeScript', 'React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'APIs'],
      gradient: 'from-purple-500 to-pink-600',
      link: 'https://salmonarmtaxi.ca/',
      code: "https://github.com/RaMandeep2002/salmon_taxi_frontend.git" // Not open source
    },
    // {
    //   title: 'AI Content Generator',
    //   description: 'AI-powered content creation platform that generates blog posts, social media content, and marketing copy.',
    //   stack: ['Next.js', 'OpenAI', 'Tailwind', 'Supabase'],
    //   gradient: 'from-emerald-500 to-teal-600'
    // },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800/50 to-slate-900" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden group-hover:border-cyan-500/50 transition-all duration-300 transform group-hover:scale-105">
                <div className={`h-48 bg-linear-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-full" />
                    <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full" />
                  </div>
                  <Code2 size={64} className="text-white relative z-10" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-cyan-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
