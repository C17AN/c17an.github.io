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
    year: "2025",
    title: "Dazzly",
    category: "WEB APP · DESIGN",
    description:
      "색상 팔레트를 만들고 저장하는 웹 앱. 로컬 저장소를 이용해 새로고침 후에도 작업을 이어갑니다.",
    tags: ["React", "TypeScript", "Color palette"],
    repo: "https://github.com/C17AN/dazzly",
  },
  {
    number: "03",
    year: "2024",
    title: "MiniMac",
    category: "BLOG · PERSONAL",
    description:
      "맥 시스템 UI의 분위기를 담아 만든 개인 기술 블로그입니다.",
    tags: ["Gatsby", "React", "SCSS"],
    repo: "https://github.com/C17AN/MiniMac",
    demo: "https://c17an.netlify.app/",
  },
  {
    number: "04",
    year: "2024",
    title: "Carbon Clock",
    category: "HACKATHON · CLIMATE",
    description:
      "세계의 탄소 배출량과 지구 평균 기온이 위험 수준에 도달하기까지 남은 시간을 시각화했습니다.",
    tags: ["React", "Climate data", "Hackathon"],
    repo: "https://github.com/C17AN/carbon-clock",
    demo: "https://carbon-hackathon.netlify.app/",
  },
  {
    number: "05",
    year: "2023",
    title: "Where Are You?",
    category: "REAL-TIME · TRANSIT",
    description:
      "공공데이터를 활용해 화전역 경의중앙선 열차 정보를 확인하는 트래커입니다.",
    tags: ["React", "Express", "Public data"],
    repo: "https://github.com/C17AN/where-are-you",
  },
  {
    number: "06",
    year: "2023",
    title: "MenuStock",
    category: "DESKTOP · FINANCE",
    description:
      "macOS 메뉴 바에서 주식 시세를 확인할 수 있는 Electron 위젯입니다.",
    tags: ["Electron", "macOS", "JavaScript"],
    repo: "https://github.com/C17AN/MenuStock",
  },
  {
    number: "07",
    year: "2023",
    title: "KAUBOARD",
    category: "BROWSER · CAMPUS",
    description:
      "한국항공대학교 학생을 위한 새 탭 크롬 확장 대시보드입니다.",
    tags: ["React", "Chrome Extension", "Node.js"],
    repo: "https://github.com/C17AN/KAUBOARD",
  },
  {
    number: "08",
    year: "2022",
    title: "TALKYTALKY",
    category: "SPEAKING · VOICE",
    description:
      "ETRI 음성 API와 Google 음성 합성을 활용해 짧은 말하기 연습을 돕는 서비스입니다.",
    tags: ["React", "ETRI Open API", "Text to speech"],
    repo: "https://github.com/C17AN/TALKYTALKY",
    demo: "https://talkytalky-etri.netlify.app",
  },
];

export default function ProjectsPage(): JSX.Element {
  return (
    <Layout
      title="프로젝트"
      description="김찬민이 만든 웹, 데스크톱, 인터랙티브 프로젝트 모음"
    >
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>SELECTED WORKS · 2020—2026</p>
          <h1>
            만들고 실험한 것들을
            <br />
            <span>한곳에 모았습니다.</span>
          </h1>
          <p className={styles.intro}>
            웹 서비스부터 작은 인터랙션까지, 직접 만든 프로젝트를 소개합니다.
            카드를 눌러 프로젝트를 둘러보세요.
          </p>
        </header>

        <div className={styles.sectionHeading}>
          <span>PROJECT ARCHIVE</span>
          <span>{String(projects.length).padStart(2, "0")} PROJECTS</span>
        </div>

        <section className={styles.grid} aria-label="프로젝트 목록">
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
          <p>더 많은 코드와 실험은 GitHub에서 볼 수 있습니다.</p>
          <a href="https://github.com/C17AN" target="_blank" rel="noreferrer">
            GitHub 프로필 보기 <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </main>
    </Layout>
  );
}
