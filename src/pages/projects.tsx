import React from "react";
import Layout from "@theme/Layout";
import styles from "./projects.module.css";

type Project = {
  number: string;
  year: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  repo: string;
  demo: string;
  preview: string;
  previewAlt: string;
};

const projects: Project[] = [
  {
    number: "01",
    year: "2026",
    title: "GROOVE",
    category: "SOUND / OBJECT",
    description:
      "회전하는 LP와 턴테이블. 재생 버튼을 누르면 Web Audio로 만든 음악이 흐릅니다.",
    tags: ["THREE.JS", "WEB AUDIO"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/vinyl",
    demo: "/vinyl/",
    preview: "/project-previews/vinyl.webp",
    previewAlt: "회전하는 LP와 턴테이블의 3D 미리보기",
  },
  {
    number: "02",
    year: "2026",
    title: "LOTTE WORLD TOWER",
    category: "ARCHITECTURE / SEOUL",
    description:
      "서울의 랜드마크를 유리 외벽과 첨탑까지 3D로 구성했습니다. 드래그해 둘러보세요.",
    tags: ["THREE.JS", "PROCEDURAL 3D"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/lotte-tower",
    demo: "/lotte-tower/",
    preview: "/project-previews/tower.webp",
    previewAlt: "롯데월드타워 3D 모델의 미리보기",
  },
  {
    number: "03",
    year: "2026",
    title: "PORSCHE TAYCAN",
    category: "AUTOMOTIVE / FORM",
    description:
      "낮은 차체와 패스트백 실루엣을 모델링했습니다. 차체 색상을 바꾸며 360도로 살펴보세요.",
    tags: ["THREE.JS", "ORBIT CONTROLS"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/taycan",
    demo: "/taycan/",
    preview: "/project-previews/taycan.webp",
    previewAlt: "포르쉐 타이칸 3D 모델의 미리보기",
  },
];

export default function ProjectsPage(): JSX.Element {
  return (
    <Layout
      title="Three.js 프로젝트"
      description="Three.js로 만든 인터랙티브 3D 프로젝트 모음"
    >
      <main className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.statusDot} aria-hidden="true" />
                C17AN / INTERACTIVE ARCHIVE
              </p>
              <h1>
                DIGITAL
                <br />
                <span>DIMENSIONS<span className={styles.period}>.</span></span>
              </h1>
              <p className={styles.intro}>
                코드로 만든 형태와 움직임을 탐험하세요.
                <br />
                Three.js로 구현한 인터랙티브 3D 작업을 모았습니다.
              </p>
              <a className={styles.heroLink} href="#works">
                EXPLORE THE ARCHIVE <span aria-hidden="true">↘</span>
              </a>
            </div>
            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.orbitOuter} />
              <div className={styles.orbitMiddle} />
              <div className={styles.orbitInner} />
              <div className={styles.orbitCore}>3D</div>
              <span className={styles.orbitLabel}>REALTIME / WEBGL</span>
            </div>
          </header>

          <div className={styles.sectionHeading} id="works">
            <div>
              <span className={styles.sectionIndex}>01 /</span>
              <span>SELECTED EXPERIENCES</span>
            </div>
            <span>{String(projects.length).padStart(2, "0")} PROJECTS IN THE ARCHIVE</span>
          </div>

          <section className={styles.grid} aria-label="Three.js 프로젝트 목록">
            {projects.map((project) => (
              <article className={styles.card} key={project.number}>
                <a
                  className={styles.preview}
                  href={project.demo}
                  aria-label={`${project.title} 프로젝트 열기`}
                >
                  <img
                    src={project.preview}
                    alt={project.previewAlt}
                    width="762"
                    height="660"
                    loading={project.number === "01" ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <span className={styles.previewTint} aria-hidden="true" />
                  <span className={styles.previewTop} aria-hidden="true">
                    <span><i /> LIVE PREVIEW</span>
                    <span>{project.number} / 03</span>
                  </span>
                  <span className={styles.previewAction} aria-hidden="true">
                    ENTER EXPERIENCE <span>↗</span>
                  </span>
                </a>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>PROJECT {project.number} / {project.year}</span>
                    <span>{project.category}</span>
                  </div>
                  <h2><a href={project.demo}>{project.title}</a></h2>
                  <p className={styles.description}>{project.description}</p>
                  <ul className={styles.tags} aria-label="사용 기술">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className={styles.cardLinks}>
                    <a href={project.demo}>프로젝트 열기 <span aria-hidden="true">↗</span></a>
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      소스 코드 <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <footer className={styles.footer}>
            <span>C17AN / THREE.JS EXPERIMENTS</span>
            <a href="https://github.com/C17AN" target="_blank" rel="noreferrer">
              GITHUB PROFILE ↗
            </a>
          </footer>
        </div>
      </main>
    </Layout>
  );
}