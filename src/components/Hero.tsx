"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

type ProjectCollection = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  cases: Project[];
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
  projects: ProjectCollection;
}) => {
  const solidColor = "#F3EEE7";

  return (
    <>
      <section
        className="relative isolate min-h-[100svh] overflow-hidden bg-[#0F0F0F] px-2 py-2 text-[#111111] sm:min-h-[640px] sm:px-3 sm:pb-3 lg:h-screen"
        id="hero"
      >
        <div
          className="relative h-[calc(100svh-1rem)] min-h-[640px] w-full overflow-hidden rounded-[1.35rem] sm:min-h-[620px] lg:h-full lg:min-h-0"
          style={{ backgroundColor: solidColor }}
        >
          <motion.div
            className="absolute left-5 top-28 z-50 w-[calc(100%-2.5rem)] max-h-14 sm:left-8 sm:top-20 sm:w-full lg:left-12 lg:top-12"
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          >
            <p
              className="max-w-[19.5rem] text-[0.66rem] leading-[1.42] tracking-wide text-[#111111]/55 sm:max-w-[30rem] sm:text-[0.86rem] sm:leading-[1.55] lg:max-w-[39rem] lg:text-[clamp(0.9rem,1.1vw,1.08rem)] lg:leading-[1.65]"
              style={{
                fontFamily: "var(--font-comico), cursive",
              }}
            >
              {dict.cornerNote}
            </p>
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 z-0 h-[38%] overflow-hidden sm:h-[42%] lg:inset-0 lg:h-full lg:w-full">
            <video
              src="/img/fluid-gradient-loop-1920x1080.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/img/fluid_gradient_loop_logo_dot_style_preview.png"
            >
              <source
                src="/img/fluid-gradient-loop-1920x1080.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="pointer-events-none absolute inset-x-0 -top-16 h-40 bg-[#F3EEE7] blur-2xl lg:hidden"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#F3EEE7] via-[#F3EEE7]/90 to-transparent sm:h-44 lg:hidden" />
          </div>

          <div
            className="absolute inset-y-0 left-0 z-[1] hidden w-1/2 lg:block"
            style={{ backgroundColor: solidColor }}
          />

          <div className="relative z-10 flex h-full flex-col px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
            <div className="flex flex-1 items-start justify-center text-center lg:items-center">
              <motion.div
                className="mx-auto w-full max-w-none pt-[24rem] min-[390px]:pt-[25.5rem] sm:pt-[19rem] lg:pt-0"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
              >
                <SplitHeroCopy
                  title={dict.title}
                  description={dict.shortDescription}
                  solidColor={solidColor}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioWall projects={projects} />
    </>
  );
};

const SplitHeroCopy = ({
  title,
  description,
  solidColor,
}: {
  title: string;
  description: string;
  solidColor: string;
}) => {
  const headlineClass =
    "text-[clamp(2.45rem,9.2vw,4.2rem)] font-semibold leading-[0.9] tracking-normal lg:text-[clamp(2.8rem,7.6vw,7.1rem)]";
  const descriptionClass =
    "mx-auto mt-5 max-w-[31rem] text-[13px] font-medium leading-6 sm:text-[1.05rem] sm:leading-7";

  return (
    <div className="relative mx-auto w-full lg:w-[min(92vw,78rem)]">
      <div className="lg:hidden">
        <h1 className={`${headlineClass} text-[#111111]`}>{title}</h1>
        <p className={`${descriptionClass} text-[#111111]/68`}>
          {description}
        </p>
      </div>

      <div className="relative hidden lg:block">
        <h1 className="sr-only">{title}</h1>
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        >
          <FluidVideoTitle title={title} description={description} />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "inset(0 0 0 50%)" }}
        >
          <SolidColorTitle
            title={title}
            description={description}
            color={solidColor}
          />
        </div>
        <div className="invisible">
          <SolidColorTitle
            title={title}
            description={description}
            color={solidColor}
          />
        </div>
      </div>
    </div>
  );
};

const splitTitleIntoLines = (title: string) => {
  const words = title.split(" ");

  if (words.length <= 4) {
    return [title];
  }

  const midpoint = Math.ceil(words.length / 2);

  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
};

const splitDescriptionIntoLines = (description: string) => {
  const words = description.split(" ");
  const midpoint = Math.ceil(words.length / 2);

  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
};

const FluidVideoTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const lines = splitTitleIntoLines(title);
  const descriptionLines = splitDescriptionIntoLines(description);

  return (
    <svg
      className="h-[clamp(12rem,18vw,17rem)] w-full overflow-visible"
      viewBox="0 0 1400 330"
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="hero-fluid-title-clip">
          {lines.map((line, index) => (
            <text
              key={line}
              x="700"
              y={lines.length === 1 ? 150 : index === 0 ? 105 : 218}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="var(--font-satoshi), Arial, sans-serif"
              fontSize={lines.length === 1 ? "108" : "104"}
              fontWeight="700"
              letterSpacing="0"
            >
              {line}
            </text>
          ))}
          {descriptionLines.map((line, index) => (
            <text
              key={line}
              x="700"
              y={lines.length === 1 ? 238 + index * 30 : 284 + index * 30}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="var(--font-satoshi), Arial, sans-serif"
              fontSize="24"
              fontWeight="600"
              letterSpacing="0"
            >
              {line}
            </text>
          ))}
        </clipPath>
      </defs>
      <foreignObject
        x="0"
        y="0"
        width="1400"
        height="330"
        clipPath="url(#hero-fluid-title-clip)"
      >
        <video
          xmlns="http://www.w3.org/1999/xhtml"
          src="/img/fluid-gradient-loop-1920x1080.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </foreignObject>
    </svg>
  );
};

const SolidColorTitle = ({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) => {
  const lines = splitTitleIntoLines(title);
  const descriptionLines = splitDescriptionIntoLines(description);

  return (
    <svg
      className="h-[clamp(12rem,18vw,17rem)] w-full overflow-visible"
      viewBox="0 0 1400 330"
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {lines.map((line, index) => (
        <text
          key={line}
          x="700"
          y={lines.length === 1 ? 150 : index === 0 ? 105 : 218}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-satoshi), Arial, sans-serif"
          fontSize={lines.length === 1 ? "108" : "104"}
          fontWeight="700"
          letterSpacing="0"
          fill={color}
        >
          {line}
        </text>
      ))}
      {descriptionLines.map((line, index) => (
        <text
          key={line}
          x="700"
          y={lines.length === 1 ? 238 + index * 30 : 284 + index * 30}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-satoshi), Arial, sans-serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="0"
          fill={color}
          opacity="0.78"
        >
          {line}
        </text>
      ))}
    </svg>
  );
};

const PortfolioWall = ({ projects }: { projects: ProjectCollection }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  useEffect(() => {
    const measureTrack = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track) {
        return;
      }

      setMaxTranslate(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    measureTrack();
    window.addEventListener("resize", measureTrack);

    return () => window.removeEventListener("resize", measureTrack);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.round(latest * (projects.cases.length - 1));
    const clampedIndex = Math.min(
      projects.cases.length - 1,
      Math.max(0, nextIndex)
    );

    setActiveIndex(clampedIndex);
  });

  return (
    <section id="case-studies" className="relative bg-[#0F0F0F] text-white">
      <div className="px-5 py-16 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-[clamp(2.35rem,12vw,4.4rem)] font-semibold leading-[0.9] tracking-normal">
            {projects.title}
          </h2>
          {projects.subtitle && (
            <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-gray-300">
              {projects.subtitle}
            </p>
          )}
        </div>

        <div className="mx-auto mt-10 flex max-w-md flex-col gap-5">
          {projects.cases.map((project, index) => (
            <motion.a
              href={getProjectHref(project.client)}
              key={project.id}
              className="group relative block overflow-hidden rounded-xl text-white outline-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24) }}
              aria-label={`View ${project.client} case study`}
            >
              <ProjectCardMedia project={project} sizes="100vw" isActive />
            </motion.a>
          ))}
        </div>
      </div>

      <div
        ref={sectionRef}
        className="relative hidden bg-[#0F0F0F] text-white lg:block"
        style={{
          height: `${Math.max(projects.cases.length * 78, 220)}vh`,
        }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-12">
          <div className="mx-auto mb-8 max-w-screen-2xl px-14 text-center">
            <h2 className="mx-auto max-w-4xl text-[clamp(2.25rem,5vw,5rem)] font-semibold leading-[0.9] tracking-normal">
              {projects.title}
            </h2>
            {projects.subtitle && (
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
                {projects.subtitle}
              </p>
            )}
          </div>

        <div
          ref={viewportRef}
          className="overflow-hidden"
        >
          <motion.div
            ref={trackRef}
            className="flex w-max gap-6 px-[max(1.25rem,calc((100vw-82rem)/2))] pb-8 will-change-transform"
            style={{ x: trackX }}
          >
            {projects.cases.map((project, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.a
                  href={getProjectHref(project.client)}
                  key={project.id}
                  className="group relative block w-[84vw] max-w-[22rem] shrink-0 overflow-hidden rounded-xl text-white outline-none sm:w-[64vw] sm:max-w-[45rem] lg:w-[34rem] xl:w-[38rem]"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: (index % 4) * 0.06 }}
                  aria-label={`View ${project.client} case study`}
                >
                  <ProjectCardMedia
                    project={project}
                    sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 34rem, 100vw"
                    isActive={isActive}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCardMedia = ({
  project,
  sizes,
  isActive,
}: {
  project: Project;
  sizes: string;
  isActive: boolean;
}) => {
  return (
    <div className="relative aspect-[1.28/1] overflow-hidden bg-[#151515] shadow-[0_26px_90px_rgba(0,0,0,.45)] transition duration-500">
      {project.coverImageLocation.type === "video" ? (
        <video
          className={mediaClassName}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={project.coverImageLocation.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={project.coverImageLocation.src}
          alt={project.coverImageAlt ?? project.client}
          fill
          sizes={sizes}
          className={mediaClassName}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-80" />
      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 transition-opacity duration-500 sm:p-5 ${
          isActive ? "opacity-100" : "opacity-70"
        }`}
      >
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.65)] sm:text-base">
            {project.client}
          </h3>
          <p className="mt-1 truncate text-xs leading-tight text-white/72 drop-shadow-[0_2px_10px_rgba(0,0,0,.65)] sm:text-sm">
            {project.service}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
