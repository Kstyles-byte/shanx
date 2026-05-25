"use client";

import React, { useEffect, useRef } from "react";

interface Project {
  id: string;
  number: string;
  title: string;
  videoSrc: string;
}

const projects: Project[] = [
  {
    id: "re-awakening",
    number: "01",
    title: "Re-Awakening Action Shot",
    videoSrc: "/portfolio/re-Awakening.mp4",
  },
  {
    id: "re-awakening-2",
    number: "02",
    title: "Re-Awakening Secondary Cut",
    videoSrc: "/portfolio/re-Awakening2.mp4",
  },
  {
    id: "project-3",
    number: "03",
    title: "Layout & Animation Study",
    videoSrc: "/portfolio/Proj3.mp4",
  },
  {
    id: "dog-animation",
    number: "04",
    title: "Quadruped Mechanics Study",
    videoSrc: "/portfolio/dog animation.mp4",
  },
  {
    id: "kung-fu-kong",
    number: "05",
    title: "Combat Choreography Test",
    videoSrc: "/portfolio/kung fu kong.mp4",
  },
  {
    id: "acting-practice",
    number: "06",
    title: "Character Acting Exercise",
    videoSrc: "/portfolio/acting_practice2cl.mp4",
  },
  {
    id: "new-dawn",
    number: "07",
    title: "Scene Motion Study",
    videoSrc: "/portfolio/New New one.mp4",
  },
  {
    id: "experimental-sketch",
    number: "08",
    title: "2D Animation Loop",
    videoSrc: "/portfolio/1729508798159.mp4",
  },
  {
    id: "screen-capture",
    number: "09",
    title: "Production Screen Capture",
    videoSrc: "/portfolio/Recording 2026-05-14 100846.mp4",
  },
];

const tools = ["OpenToonz", "ToonBoom", "Krita", "SketchBook Pro"];

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Reveal animation on scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".project-card");
    items.forEach((item) => {
      item.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-10");
      observerRef.current?.observe(item);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleScrollToFooter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hover play control helpers
  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.play().catch((err) => {
      // Catch and ignore autoplay block exceptions
      console.log("Playback interrupted:", err);
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.pause();
  };

  return (
    <main className="flex-1 bg-[#111111] text-[#E5E5E5] selection:bg-[#E5E5E5] selection:text-[#111111]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6 uppercase">
          Fortune Chidi
        </h1>
        <p className="text-xl md:text-3xl font-medium text-neutral-400 mb-12 tracking-wide uppercase">
          2D Animator
        </p>
        <button
          onClick={handleScrollToFooter}
          className="bg-white text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer active:translate-y-0"
        >
          Contact Me
        </button>
      </section>

      {/* Work Gallery */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="mb-16 border-b border-neutral-800 pb-6 flex justify-between items-end">
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            Selected Works
          </h2>
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:inline">
            Hover video to play
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <div key={project.id} className="project-card flex flex-col gap-4">
              <div className="project-video-container rounded-lg bg-[#222222] overflow-hidden aspect-video shadow-2xl border border-neutral-900 cursor-pointer">
                <video
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-full h-full object-cover"
                >
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                  Work {project.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / About & Contact */}
      <footer
        id="contact"
        className="bg-[#222222] text-[#E5E5E5] rounded-t-3xl py-24 px-6 md:px-12 border-t border-neutral-800"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Bio & Resume */}
          <div className="md:w-1/2 flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              ABOUT
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
              I am a professional 2D animator specializing in high-fidelity character movement, hand-drawn expressions, and dynamic frame-by-frame actions. I focus on creating stories that bridge artistic depth and fluid motion.
            </p>
            
            {/* Tools of the trade */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                Tools of the Trade
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-[#111111] text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12h7.5m-7.5 3H12m-9 5.25h18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.3 8.39h.008v.008H10v-.008z"
                  />
                </svg>
                Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="md:w-1/3 flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              CONNECT
            </h2>
            <nav className="flex flex-col gap-4">
              <a
                className="text-sm font-bold tracking-widest text-[#E5E5E5] hover:text-white transition-colors duration-300 uppercase hover:underline"
                href="mailto:chidifortune39@gmail.com"
              >
                EMAIL
              </a>
              <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase">
                PHONE: 09093340752
              </span>
              <a
                className="text-sm font-bold tracking-widest text-[#E5E5E5] hover:text-white transition-colors duration-300 uppercase hover:underline"
                href="https://www.linkedin.com/in/chidi-fortune-95a5932b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </nav>
            <div className="pt-8 border-t border-neutral-800 mt-4">
              <p className="text-[10px] text-neutral-500 tracking-[0.2em]">
                © {new Date().getFullYear()} FORTUNE CHIDI. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
