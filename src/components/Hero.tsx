"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Particles from "./ui/Particles";

type Media = {
  type: "image" | "video";
  src: string;
};

type Project = {
  id: number;
  client: string;
  service: string;
  coverImageLocation: Media;
  coverImageAlt?: string;
};

const getProjectHref = (client: string) =>
  `/projects/${client.toLowerCase().replace(/\s+/g, "-")}`;

const mediaClassName =
  "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105";

const Hero = ({
  dict,
  projects,
}: {
  dict: any;
  projects: { title: string; subtitle?: string; cases: Project[] };
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.38, 0.68],
    [1, 1.08, 6.4, 23]
  );
  const logoY = useTransform(
    scrollYProgress,
    [0, 0.38, 0.68],
    ["0%", "-3%", "-21.9%"]
  );
  const logoX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.68],
    ["0%", "0%", "-41.5%"]
  );
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.32], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.32], [0, -24]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.52, 0.62], [1, 1, 0]);
  const veilOpacity = useTransform(
    scrollYProgress,
    [0, 0.44, 0.68],
    [1, 0.76, 0]
  );
  const haloOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.64],
    [0.18, 0.32, 0]
  );
  const portalDotScale = useTransform(
    scrollYProgress,
    [0, 0.54, 0.84],
    [1, 1, 10]
  );
  const portalDotOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.58, 0.94],
    [0, 1, 1]
  );
  const portalShadeOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 0.44]);
  const projectsRevealOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.86, 1],
    [0, 0.58, 1]
  );
  const projectsRevealY = useTransform(scrollYProgress, [0.72, 1], [48, 0]);
  const background = useTransform(
    scrollYProgress,
    [0, 0.72],
    ["#0f0f0f", "#0f0f0f"]
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-[126vh] overflow-visible bg-[#0f0f0f]"
        id="hero"
      >
        <motion.div
          className="sticky top-0 h-screen overflow-hidden"
          style={{ backgroundColor: background }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 z-0"
            style={{ opacity: heroOpacity }}
          >
            <Particles />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-10 bg-[#0f0f0f]"
            style={{ opacity: veilOpacity }}
          />

          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[min(34rem,72vw,58vh)] w-[min(34rem,72vw,58vh)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl"
            style={{ opacity: haloOpacity, scale: logoScale }}
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 aspect-square w-[min(42vw,44vh,420px)] min-w-[clamp(132px,24vw,190px)] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="relative h-full w-full"
              style={{
                scale: logoScale,
                x: logoX,
                y: logoY,
                opacity: logoOpacity,
                transformOrigin: "91.5% 71.9%",
              }}
            >
              <Image
                src="/img/logo.svg"
                alt="Media Control Agency logo"
                fill
                priority
                className="object-contain drop-shadow-[0_24px_60px_rgba(255,255,255,.2)]"
              />
              <div className="absolute left-[91.5%] top-[71.9%] aspect-square w-[7.45%] -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="h-full w-full rounded-full bg-[linear-gradient(135deg,#62cbef_0%,#7d2880_100%)]"
                  style={{
                    opacity: portalDotOpacity,
                    scale: portalDotScale,
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-[35] bg-[#0f0f0f]"
            style={{ opacity: portalShadeOpacity }}
          />

          <motion.div
            className="absolute inset-x-0 top-0 z-40 flex h-screen min-h-[520px] items-center px-5 py-[clamp(1.5rem,5vh,3rem)] sm:px-8 lg:px-14"
            style={{ opacity: heroOpacity, y: textY }}
          >
            <div className="mx-auto grid h-full w-full max-w-5xl grid-rows-[minmax(0,0.85fr)_auto_minmax(0,1fr)] items-center text-center">
              <div className="self-end pb-[clamp(0.85rem,5.5vh,4rem)]">
                <span className="text-[clamp(0.62rem,1.4vw,0.75rem)] uppercase tracking-[0.28em] text-white/50">
                  {dict.subtitle}
                </span>
              </div>
              <div
                aria-hidden="true"
                className="h-[min(42vw,44vh,420px)] min-h-[clamp(132px,24vw,190px)]"
              />
              <div className="self-start pt-[clamp(0.85rem,5.5vh,4rem)]">
                <h1 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-normal text-white">
                  {dict.title}
                </h1>
                <p className="mx-auto mt-3 max-w-md text-[clamp(0.78rem,1.7vw,0.875rem)] leading-6 text-white/66">
                  {dict.shortDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        className="relative z-20 -mt-[80vh] bg-transparent pb-20 pt-0 text-white lg:pb-32"
        style={{ opacity: projectsRevealOpacity, y: projectsRevealY }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-5 sm:px-10 md:px-16">
          <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.28em] text-white/45">
                Projects
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {projects.title}
              </h2>
            </div>
            {projects.subtitle && (
              <p className="max-w-md text-sm leading-6 text-white/58 lg:col-span-4 lg:col-start-9">
                {projects.subtitle}
              </p>
            )}
          </div>
          <ProjectGrid projects={projects.cases} />
        </div>
      </motion.div>
    </>
  );
};

const ProjectGrid = ({
  projects,
  isBackdrop = false,
}: {
  projects: Project[];
  isBackdrop?: boolean;
}) => {
  const layouts = [
    "lg:absolute lg:left-[2%] lg:top-[9%] lg:w-[52%] lg:rotate-[-3deg] lg:z-20",
    "lg:absolute lg:right-[10%] lg:top-[4%] lg:w-[43%] lg:rotate-[2.2deg] lg:z-30",
    "lg:absolute lg:left-[25%] lg:top-[37%] lg:w-[39%] lg:rotate-[4deg] lg:z-10",
    "lg:absolute lg:right-[7%] lg:top-[45%] lg:w-[45%] lg:rotate-[-2.4deg] lg:z-20",
    "lg:absolute lg:left-[10%] lg:top-[67%] lg:w-[44%] lg:rotate-[1.8deg] lg:z-30",
    "lg:absolute lg:right-[10%] lg:top-[76%] lg:w-[37%] lg:rotate-[-3.4deg] lg:z-10",
  ];

  return (
    <div
      className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:block lg:h-[980px] xl:h-[1080px] ${
        isBackdrop ? "pointer-events-none opacity-80" : ""
      }`}
    >
      {projects.map((project, index) => (
        <motion.a
          href={getProjectHref(project.client)}
          key={project.id}
          className={`group relative block transition-transform duration-500 hover:!rotate-0 hover:scale-[1.035] hover:z-40 ${layouts[index % layouts.length]}`}
          initial={isBackdrop ? false : { opacity: 0, y: 42 }}
          whileInView={isBackdrop ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, delay: (index % 4) * 0.08 }}
        >
          <div
            className="relative aspect-video overflow-hidden rounded-md border border-white/15 bg-[#151515] shadow-[0_22px_70px_rgba(0,0,0,.42)] ring-1 ring-white/[0.04]"
          >
            {project.coverImageLocation.type === "video" ? (
              <video
                className={mediaClassName}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={project.coverImageLocation.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={project.coverImageLocation.src}
                alt={project.coverImageAlt ?? project.client}
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
                className={mediaClassName}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/32 to-black/5 opacity-90 transition-opacity duration-500 group-hover:opacity-78" />
            <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-white/40 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 drop-shadow-[0_2px_10px_rgba(0,0,0,.85)] sm:p-5">
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold leading-tight text-white sm:text-xl">
                {project.client}
              </h3>
              <p className="mt-1 text-xs text-white/78 sm:text-sm">
                {project.service}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default Hero;
