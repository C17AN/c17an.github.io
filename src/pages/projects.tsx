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
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    year: "2026",
    title: "GROOVE",
    category: "INTERACTIVE · 3D",
    description:
      "Three.js로 만든 턴테이블과 회전하는 LP. 재생 버튼을 누르면 Web Audio로 만든 음악이 흐릅니다.",
    tags: ["Three.js", "Web Audio API"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/vinyl",
    demo: "/vinyl/",
    featured: true,
  },
  {
    number: "02",
    year: "2026",
    title: "LOTTE WORLD TOWER",
    category: "ARCHITECTURE · SEOUL",
    description:
      "서울의 랜드마크를 Three.js로 구성했습니다. 위로 갈수록 좁아지는 유리 외벽과 첨탑을 드래그해 둘러볼 수 있습니다.",
    tags: ["Three.js", "Procedural 3D", "OrbitControls"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/lotte-tower",
    demo: "/lotte-tower/",
  },
];

export default function ProjectsPage(): JSX.Element {
  return (
    <Layout
      title="Three.js 프로젝트"
      description="Three.js로 만든 인터랙티브 3D 프로젝트 모음"
    >
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>THREE.JS · INTERACTIVE WORKS</p>
          <h1>
            Three.js로 만든
            <br />
            <span>인터랙티브 작업들.</span>
          </h1>
          <p className={styles.intro}>
            3D 오브젝트와 움직임, 소리로 만든 웹 프로젝트를 모읍니다.
          </p>
        </header>

        <div className={styles.sectionHeading}>
          <span>THREE.JS ARCHIVE</span>
          <span>{String(projects.length).padStart(2, "0")} THREE.JS PROJECT{projects.length === 1 ? "" : "S"}</span>
        </div>

        <section
          className={styles.grid}
          style={{ gridTemplateColumns: "minmax(0, 760px)" }}
          aria-label="Three.js 프로젝트 목록"
        >
          {projects.map((project) => (
            <article
              className={`${styles.card} ${project.featured ? styles.featured : ""}`}
              key={project.number}
            >
              <div className={styles.cardTop}>
                <span>{project.number} / {project.year}</span>
                <span className={styles.category}>{project.category}</span>
              </div>
              <h2>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tags} aria-label="사용 기술">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className={styles.cardLinks}>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  소스 코드 <span aria-hidden="true">↗</span>
                </a>
                {project.demo && (
                  <a
                    className={styles.demoLink}
                    href={project.demo}
                    target={project.demo.startsWith("/") ? undefined : "_blank"}
                    rel={project.demo.startsWith("/") ? undefined : "noreferrer"}
                  >
                    라이브 보기 <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>

        <footer className={styles.footer}>
          <p>새 Three.js 작업은 이곳에 모을 예정입니다.</p>
          <a href="https://github.com/C17AN" target="_blank" rel="noreferrer">
            GitHub 프로필 보기 <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </main>
    </Layout>
  );
}
