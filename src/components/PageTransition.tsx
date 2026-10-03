"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type TransitionPhase = "idle" | "covering" | "navigating" | "revealing";

type PageTransitionContextValue = {
  navigate: (href: string) => boolean;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

export const usePageTransition = () => useContext(PageTransitionContext);

type PageTransitionProps = {
  children: ReactNode;
};

const coverDuration = 480;
const revealDuration = 620;
const navigationTimeout = 5000;

const PageTransition = ({ children }: PageTransitionProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);
  const phaseRef = useRef<TransitionPhase>("idle");
  const coverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [phase, setPhase] = useState<TransitionPhase>("idle");

  const clearTimers = useCallback(() => {
    [coverTimeoutRef, revealTimeoutRef, navigationTimeoutRef].forEach((ref) => {
      if (ref.current) {
        clearTimeout(ref.current);
        ref.current = null;
      }
    });
  }, []);

  const setTransitionPhase = useCallback((nextPhase: TransitionPhase) => {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  }, []);

  const revealPage = useCallback(() => {
    clearTimers();
    setTransitionPhase("revealing");

    revealTimeoutRef.current = setTimeout(() => {
      setTransitionPhase("idle");
      revealTimeoutRef.current = null;
    }, revealDuration);
  }, [clearTimers, setTransitionPhase]);

  const navigate = useCallback(
    (href: string) => {
      const destination = new URL(href, window.location.origin);

      if (
        phaseRef.current !== "idle" ||
        destination.pathname === previousPathnameRef.current
      ) {
        return false;
      }

      clearTimers();
      setTransitionPhase("covering");

      coverTimeoutRef.current = setTimeout(() => {
        coverTimeoutRef.current = null;
        setTransitionPhase("navigating");

        navigationTimeoutRef.current = setTimeout(revealPage, navigationTimeout);
        router.push(
          `${destination.pathname}${destination.search}${destination.hash}`,
        );
      }, coverDuration);

      return true;
    },
    [clearTimers, revealPage, router, setTransitionPhase],
  );

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const destination = new URL(anchor.href, window.location.origin);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === previousPathnameRef.current
      ) {
        return;
      }

      // Swallow extra clicks while the old route is covered. A second
      // router.push here used to interrupt the active animation.
      event.preventDefault();
      navigate(anchor.href);
    };

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [navigate]);

  useEffect(() => {
    if (pathname === previousPathnameRef.current) {
      return;
    }

    previousPathnameRef.current = pathname;
    revealPage();
  }, [pathname, revealPage]);

  useEffect(() => clearTimers, [clearTimers]);

  const isTransitionVisible = phase !== "idle";
  const isRevealing = phase === "revealing";

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {isTransitionVisible && (
          <motion.div
            aria-live="polite"
            aria-label="Pagina wordt geladen"
            className="fixed inset-0 z-[100] overflow-hidden bg-[#0F0F0F]"
            initial={{
              clipPath: isRevealing
                ? "inset(0 0 0 0)"
                : "inset(0 0 100% 0)",
            }}
            animate={{
              clipPath: isRevealing
                ? "inset(0 0 0 100%)"
                : "inset(0 0 0 0)",
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: isRevealing ? 0.62 : 0.46,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <video
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55"
              src="/img/fluid-gradient-logo-palette-grain-3840x1620-h264.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0,rgba(15,15,15,.34)_38%,#0F0F0F_82%)]" />
            <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <Image
                src="/img/logo.png"
                priority
                width="200"
                height="60"
                quality={100}
                className="h-auto w-[200px]"
                alt="Media Control Agency"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
};

export default PageTransition;
