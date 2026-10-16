import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useProjectsMotion() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    gsap.registerPlugin(ScrollTrigger);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};

    const setup = () => {
      if (reducedMotion.matches) return;

      const lenis = window.matchMedia("(hover: hover) and (pointer: fine)").matches
        ? new Lenis({ lerp: 0.12, anchors: true, smoothWheel: true })
        : null;
      const updateScrollTrigger = () => ScrollTrigger.update();
      const tick = (time: number) => lenis?.raf(time * 1000);

      if (lenis) {
        lenis.on("scroll", updateScrollTrigger);
        gsap.ticker.add(tick);
      }

      const context = gsap.context(() => {
        if (window.scrollY < 100) {
          gsap.fromTo(
            page.querySelectorAll("[data-motion-hero]"),
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
            },
          );
        }

        const sectionHeading = page.querySelector("[data-motion-section]");
        if (sectionHeading) {
          gsap.fromTo(
            sectionHeading,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
              scrollTrigger: { trigger: sectionHeading, start: "top 88%", once: true },
            },
          );
        }

        page.querySelectorAll("[data-motion-project]").forEach((project) => {
          const preview = project.querySelector("[data-motion-preview]");
          const body = project.querySelector("[data-motion-body]");
          if (!preview || !body) return;

          gsap.fromTo(
            preview,
            { autoAlpha: 0, y: 28, scale: 0.97 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
              scrollTrigger: { trigger: preview, start: "top 85%", once: true },
            },
          );

          gsap.fromTo(
            body.children,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
              scrollTrigger: { trigger: body, start: "top 85%", once: true },
            },
          );
        });
      }, page);

      ScrollTrigger.refresh();
      let active = true;
      document.fonts.ready.then(() => {
        if (active) ScrollTrigger.refresh();
      });

      cleanup = () => {
        active = false;
        context.revert();
        if (lenis) {
          gsap.ticker.remove(tick);
          lenis.off("scroll", updateScrollTrigger);
          lenis.destroy();
        }
      };
    };

    const syncMotionPreference = () => {
      cleanup();
      cleanup = () => {};
      setup();
    };

    setup();
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", syncMotionPreference);
      cleanup();
    };
  }, []);

  return pageRef;
}
