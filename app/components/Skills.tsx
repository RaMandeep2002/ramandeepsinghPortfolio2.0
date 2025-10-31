"use client";
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

const Skills = () => {
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

  const skills: Skill[] = [
    { name: 'HTML', proficiency: 90, category: 'Frontend' },
    { name: 'CSS', proficiency: 80, category: 'Frontend' },
    { name: 'JavaScript', proficiency: 85, category: 'Frontend' },
    { name: 'TypeScript', proficiency: 65, category: 'Frontend' },
    { name: 'React', proficiency: 75, category: 'Frontend' },
    { name: 'Tailwind CSS', proficiency: 80, category: 'Frontend' },
    { name: 'Wordpress', proficiency: 50, category: 'Frontend' },
    { name: 'Node.js', proficiency: 65, category: 'Backend' },
    { name: 'Express.js', proficiency: 65, category: 'Backend' },
    { name: 'MongoDB', proficiency: 60, category: 'Backend' },
    { name: 'REST APIs', proficiency: 70, category: 'Backend' },
    { name: 'Git', proficiency: 80, category: 'Tools' },
    { name: 'Docker', proficiency: 50, category: 'Tools' },
    { name: 'Postman', proficiency: 50, category: 'Tools' },
    { name: 'Figma', proficiency: 45, category: 'Tools' },
    { name: 'VS Code', proficiency: 85, category: 'Tools' },
    { name: 'Cursor', proficiency: 85, category: 'Tools' },
    { name: 'npm', proficiency: 75, category: 'Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

  const getColorByProficiency = (proficiency: number) => {
    if (proficiency >= 90) return 'from-emerald-500 to-cyan-500';
    if (proficiency >= 75) return 'from-cyan-500 to-blue-500';
    return 'from-blue-500 to-purple-500';
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800/50 to-slate-900" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Proficiency
          </span>
        </h2>

        <p className={`text-center text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          My technical expertise across the stack
        </p>

        <div className="space-y-8 sm:space-y-12">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(categoryIndex + 2) * 100}ms` }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                {category}
              </h3>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-medium text-base sm:text-lg">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold text-sm sm:text-base">{skill.proficiency}%</span>
                      </div>

                      <div className="relative h-2.5 sm:h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full bg-linear-to-r ${getColorByProficiency(skill.proficiency)} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.proficiency}%` : '0%',
                            transitionDelay: `${(categoryIndex + 2) * 100 + index * 50}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 sm:mt-12 lg:mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-slate-700 mx-4">
            <p className="text-slate-300 text-base sm:text-lg">
              Always learning and expanding my skillset with new technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
