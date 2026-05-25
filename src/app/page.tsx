"use client";

import React, { useEffect, useRef } from "react";

interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  videoSrc: string;
}

const projects: Project[] = [
  {
    id: "cybernetic-bloom",
    number: "01",
    category: "CHARACTER ANIMATION",
    title: "Cybernetic Bloom",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "kinetic-flow",
    number: "02",
    category: "MOTION DESIGN",
    title: "Kinetic Flow",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "system-overload",
    number: "03",
    category: "TECHNICAL DIRECTING",
    title: "System Overload",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "atmospheric-void",
    number: "04",
    category: "3D COMPOSITING",
    title: "Atmospheric Void",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
];

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

  return (
    <main className="flex-1 bg-[#111111] text-[#E5E5E5] selection:bg-[#E5E5E5] selection:text-[#111111]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6 uppercase">
          Alex Rivers
        </h1>
        <p className="text-xl md:text-3xl font-medium text-neutral-400 mb-12 tracking-wide">
          3D Character Animator
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <div key={project.id} className="project-card flex flex-col gap-4">
              <div className="project-video-container rounded-lg bg-[#222222] overflow-hidden aspect-video shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                >
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                  {project.number} / {project.category}
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
              I am a motion designer specializing in high-fidelity 3D character animation and procedural motion systems. My work focuses on the intersection of technical precision and cinematic storytelling for global brands and studios.
            </p>
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
                href="mailto:contact@alexrivers.com"
              >
                EMAIL
              </a>
              <a
                className="text-sm font-bold tracking-widest text-[#E5E5E5] hover:text-white transition-colors duration-300 uppercase hover:underline"
                href="#"
              >
                LINKEDIN
              </a>
              <a
                className="text-sm font-bold tracking-widest text-[#E5E5E5] hover:text-white transition-colors duration-300 uppercase hover:underline"
                href="#"
              >
                VIMEO
              </a>
              <a
                className="text-sm font-bold tracking-widest text-[#E5E5E5] hover:text-white transition-colors duration-300 uppercase hover:underline"
                href="#"
              >
                ARTSTATION
              </a>
            </nav>
            <div className="pt-8 border-t border-neutral-800 mt-4">
              <p className="text-[10px] text-neutral-500 tracking-[0.2em]">
                © {new Date().getFullYear()} ANIMATOR PORTFOLIO. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
