"use client";
import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800/30 to-slate-900" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <p className={`text-center text-slate-300 text-base sm:text-lg mb-8 sm:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-1 gap-8 sm:gap-12">
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              {/* No form, intentionally left blank for visual symmetry or possible info block */}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Mail, title: 'Email', value: 'ramandeepsingh1511@gmail.com', href: 'mailto:ramandeepsingh1511@gmail.com' },
                { icon: Phone, title: 'Phone', value: '+91 95929 35755', href: 'tel:+919592935755' },
                { icon: MapPin, title: 'Location', value: 'Kharar, Punjab', href: '#' }
              ].map(({ icon: Icon, title, value, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group flex items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs sm:text-sm">{title}</p>
                    <p className="text-white font-medium text-sm sm:text-base break-all">{value}</p>
                  </div>
                </a>
              ))}

              <div className="pt-4 sm:pt-6">
                <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">Follow me on social media</p>
                <div className="flex gap-3 sm:gap-4">
                  {[
                    { icon: Github, href: '#', color: 'hover:bg-cyan-500' },
                    { icon: Linkedin, href: '#', color: 'hover:bg-blue-500' },
                    { icon: Mail, href: '#', color: 'hover:bg-purple-500' }
                  ].map(({ icon: Icon, href, color }, index) => (
                    <a
                      key={index}
                      href={href}
                      className={`p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-slate-400 transition-all duration-300 hover:scale-110 hover:text-white ${color}`}
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-slate-700 text-center text-slate-400 text-sm sm:text-base">
          <p>© 2025 Ramandeep Singh. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
