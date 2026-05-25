"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Project {
  id: string;
  number: string;
  title: string;
  videoSrc: string;
  thumbnailSrc: string;
}

const projects: Project[] = [
  {
    id: "re-awakening",
    number: "01",
    title: "Re-Awakening Action Shot",
    videoSrc: "/portfolio/re-Awakening.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 221055.png",
  },
  {
    id: "re-awakening-2",
    number: "02",
    title: "Re-Awakening Secondary Cut",
    videoSrc: "/portfolio/re-Awakening2.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 221146.png",
  },
  {
    id: "project-3",
    number: "03",
    title: "Layout & Animation Study",
    videoSrc: "/portfolio/Proj3.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 220952.png",
  },
  {
    id: "dog-animation",
    number: "04",
    title: "Quadruped Mechanics Study",
    videoSrc: "/portfolio/dog animation.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 220704.png",
  },
  {
    id: "kung-fu-kong",
    number: "05",
    title: "Combat Choreography Test",
    videoSrc: "/portfolio/kung fu kong.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 220811.png",
  },
  {
    id: "acting-practice",
    number: "06",
    title: "Character Acting Exercise",
    videoSrc: "/portfolio/acting_practice2cl.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 220608.png",
  },
  {
    id: "new-dawn",
    number: "07",
    title: "Scene Motion Study",
    videoSrc: "/portfolio/New New one.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 220844.png",
  },
  {
    id: "experimental-sketch",
    number: "08",
    title: "2D Animation Loop",
    videoSrc: "/portfolio/1729508798159.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 220511.png",
  },
  {
    id: "screen-capture",
    number: "09",
    title: "Production Screen Capture",
    videoSrc: "/portfolio/Recording 2026-05-14 100846.mp4",
    thumbnailSrc: "/thumbnail/Screenshot 2026-05-25 221231.png",
  },
];

const tools = ["OpenToonz", "ToonBoom", "Krita", "SketchBook Pro"];

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="flex-1 bg-[#111111] text-[#E5E5E5] selection:bg-[#E5E5E5] selection:text-[#111111]">
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

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="mb-16 border-b border-neutral-800 pb-6 flex justify-between items-end">
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            Selected Works
          </h2>
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:inline">
            Click card to play
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="project-card flex flex-col gap-4 group cursor-pointer"
            >
              <div className="project-video-container rounded-lg bg-[#1A1A1A] aspect-video shadow-2xl border border-neutral-900 flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-all duration-300">
                <Image
                  src={project.thumbnailSrc}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-0"
                />

                <div className="flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-110 z-10">
                  <div className="w-16 h-16 rounded-full bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center text-white border border-neutral-700 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 translate-x-[2px]"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase group-hover:text-white transition-colors bg-neutral-950/40 px-3 py-1 rounded">
                    PLAY VIDEO
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                  Work {project.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeProject && (
        <div
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 animate-fade-in transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl bg-[#161616] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 relative flex flex-col"
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="aspect-video w-full bg-black relative">
              <video
                key={activeProject.id}
                src={activeProject.videoSrc}
                autoPlay
                controls
                preload="auto"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 md:p-8 bg-[#1A1A1A] border-t border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                  Work {activeProject.number}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-1">
                  {activeProject.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="text-xs font-bold tracking-widest text-[#E5E5E5] hover:text-white uppercase hover:underline"
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}

      <footer
        id="contact"
        className="bg-[#222222] text-[#E5E5E5] rounded-t-3xl py-24 px-6 md:px-12 border-t border-neutral-800"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="md:w-1/2 flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              ABOUT
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
              I am a professional 2D animator specializing in high-fidelity character movement, hand-drawn expressions, and dynamic frame-by-frame actions. I focus on creating stories that bridge artistic depth and fluid motion.
            </p>
            
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
