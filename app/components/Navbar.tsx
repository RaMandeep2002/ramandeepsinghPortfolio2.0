"use client";

import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-black/30 bg-black/20 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white/90 hover:text-white font-semibold tracking-tight">
            My Portfolio
          </Link>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="#projects" className="text-white/70 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#about" className="text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
          <div className="ml-2 flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}


