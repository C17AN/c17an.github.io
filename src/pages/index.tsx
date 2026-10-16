import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import gsap from "gsap";
import { useProjectsMotion } from "../components/ProjectsMotion/useProjectsMotion";
import styles from "./index.module.css";

const projects = [
  { title: "GROOVE", lines: ["GROOVE"], category: "SOUND / OBJECT", image: "/project-previews/vinyl-night.webp", alt: "어두운 무대에 놓인 LP 턴테이블", demo: "/vinyl/", source: "https://github.com/C17AN/c17an.github.io/tree/master/static/vinyl" },
  { title: "LOTTE WORLD TOWER", lines: ["LOTTE WORLD", "TOWER"], category: "ARCHITECTURE / SEOUL", image: "/project-previews/tower-night.webp", alt: "밤의 서울을 배경으로 빛나는 롯데월드타워", demo: "/lotte-tower/", source: "https://github.com/C17AN/c17an.github.io/tree/master/static/lotte-tower" },
  { title: "PORSCHE TAYCAN", lines: ["PORSCHE", "TAYCAN"], category: "AUTOMOTIVE / 3D", image: "/project-previews/taycan-night.webp", alt: "푸른빛 전시대 위의 흰색 포르쉐 타이칸", demo: "/taycan/", source: "https://github.com/C17AN/c17an.github.io/tree/master/static/taycan" },
  { title: "SCREW WORKS", lines: ["SCREW", "WORKS"], category: "FACTORY / SIMULATION", image: "/project-previews/factory-night.webp", alt: "푸른빛 스마트 공장의 생산 라인", demo: "/smart-factory/", source: "https://github.com/C17AN/c17an.github.io/tree/master/static/smart-factory" },
] as const;

const number = (index: number) => String(index + 1).padStart(2, "0");

export default function Home(): JSX.Element {
  const pageRef = useProjectsMotion();
  const artworkRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const swipeX = useRef<number | null>(null);
  const initial = useRef(true);
  const [active, setActive] = useState(0);
  const selected = projects[active];

  useEffect(() => {
    const stage = stageRef.current;
    const artwork = artworkRef.current;
    if (!stage || !artwork || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const moveX = gsap.quickTo(artwork, "x", { duration: .7, ease: "power3.out" });
    const moveY = gsap.quickTo(artwork, "y", { duration: .7, ease: "power3.out" });
    const move = (event: PointerEvent) => {
      const box = stage.getBoundingClientRect();
      moveX(((event.clientX - box.left) / box.width - .5) * 24);
      moveY(((event.clientY - box.top) / box.height - .5) * 24);
    };
    const reset = () => { moveX(0); moveY(0); };
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", reset);
    return () => { stage.removeEventListener("pointermove", move); stage.removeEventListener("pointerleave", reset); gsap.set(artwork, { clearProps: "transform" }); };
  }, []);

  useEffect(() => {
    if (initial.current) { initial.current = false; return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const page = pageRef.current;
    if (!page) return;
    const image = page.querySelector("[data-shot='" + active + "']");
    if (image) gsap.fromTo(image, { autoAlpha: 0, clipPath: "inset(0 100% 0 0)", scale: 1.045 }, { autoAlpha: 1, clipPath: "inset(0 0% 0 0)", scale: 1, duration: .85, ease: "power3.inOut", clearProps: "clipPath,transform,opacity,visibility" });
    gsap.fromTo(page.querySelectorAll("[data-swap]"), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: .55, stagger: .06, ease: "power3.out", clearProps: "opacity,visibility,transform" });
  }, [active]);

  return <Layout title="Selected Works" description="C17AN의 인터랙티브 3D 프로젝트. 장면을 선택하고 직접 체험해 보세요.">
    <main id="top" className={styles.page} ref={pageRef}>
      <header className={styles.topbar}>
        <a className={styles.wordmark} href="/" aria-label="C17AN 홈">C17AN<span>®</span></a>
        <nav className={styles.topbarCenter} aria-label="사이트 메뉴"><a href="/" aria-current="page">WORK</a><a href="/resume/">RESUME</a></nav>
        <a className={styles.github} href="https://github.com/C17AN" target="_blank" rel="noopener noreferrer">GITHUB <span aria-hidden="true">↗</span></a>
      </header>
      <section className={styles.stage} ref={stageRef} aria-label="프로젝트 쇼케이스">
        <div className={styles.stageTop} data-motion-hero><span>SELECTED WORKS</span><span>01 — 04</span></div>
        <div className={styles.artwork} ref={artworkRef} onTouchStart={event => { swipeX.current = event.touches[0].clientX; }} onTouchEnd={event => {
          if (swipeX.current === null) return;
          const distance = event.changedTouches[0].clientX - swipeX.current;
          if (Math.abs(distance) > 60) setActive(current => (current + (distance < 0 ? 1 : projects.length - 1)) % projects.length);
          swipeX.current = null;
        }}>
          {projects.map((project, index) => <img key={project.demo} src={project.image} alt={index === active ? project.alt : ""} aria-hidden={index !== active} data-shot={index} className={index === active ? styles.shotActive : styles.shot} loading={index === 0 ? "eager" : "lazy"} decoding="async" />)}
          <span className={styles.imageCorner} aria-hidden="true">C17AN / {number(active)}</span>
        </div>
        <div className={styles.stageInfo}>
          <p className={styles.stageCategory} data-motion-hero data-swap><span className={styles.orangeSquare} />{selected.category}</p>
          <h1 className={styles.stageTitle} data-motion-hero data-swap aria-label={selected.title}>{selected.lines.map(line => <span key={line}>{line}</span>)}</h1>
          <div className={styles.stageAction} data-motion-hero data-swap><a className={styles.enter} href={selected.demo}>ENTER PROJECT <span aria-hidden="true">↗</span></a><a className={styles.source} href={selected.source} target="_blank" rel="noopener noreferrer">SOURCE ↗</a></div>
        </div>
        <div className={styles.counter} data-motion-hero aria-live="polite"><strong>{number(active)}</strong><span>/ 04</span></div>
      </section>
      <nav className={styles.switcher} aria-label="프로젝트 선택" data-motion-hero>
        {projects.map((project, index) => <button key={project.demo} type="button" className={index === active ? styles.switchActive : styles.switch} aria-pressed={index === active} onClick={() => setActive(index)} onKeyDown={event => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          const next = (index + (event.key === "ArrowRight" ? 1 : projects.length - 1)) % projects.length;
          setActive(next);
          (event.currentTarget.parentElement?.children[next] as HTMLButtonElement)?.focus();
        }}><span>{number(index)}</span><strong>{project.title}</strong></button>)}
      </nav>
      <section className={styles.archive} aria-labelledby="archive-title">
        <div className={styles.archiveHeading} data-motion-section><p>THE INDEX <span>© 2026</span></p><h2 id="archive-title">EXPLORE<br /><em>EVERYTHING.</em></h2></div>
        <div className={styles.archiveList}>{projects.map((project, index) => <article className={styles.archiveRow} key={project.demo} data-motion-project>
          <a href={project.demo} className={styles.archiveMain} data-motion-body><span className={styles.archiveNumber}>{number(index)}</span><span className={styles.archiveName}>{project.title}</span><span className={styles.archiveCategory}>{project.category}</span><span className={styles.archiveArrow} aria-hidden="true">↗</span></a>
          <a href={project.demo} className={styles.archivePreview} tabIndex={-1} aria-hidden="true" data-motion-preview><img src={project.image} alt="" loading="lazy" decoding="async" /></a>
        </article>)}</div>
      </section>
      <footer className={styles.footer}><span>C17AN®</span><span>BUILT TO BE EXPLORED.</span><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); }}>BACK TO TOP ↑</a></footer>
    </main>
  </Layout>;
}
