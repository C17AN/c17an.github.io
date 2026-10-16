import React from "react";
import Layout from "@theme/Layout";
import styles from "./projects.module.css";
import { useProjectsMotion } from "../components/ProjectsMotion/useProjectsMotion";

type Project = {
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
    year: "2026",
    title: "GROOVE",
    category: "사운드 · 오브젝트",
    description: "회전하는 LP와 턴테이블. 재생 버튼을 누르면 Web Audio로 만든 음악이 흐릅니다.",
    tags: ["Three.js", "Web Audio"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/vinyl",
    demo: "/vinyl/",
    preview: "/project-previews/vinyl.webp",
    previewAlt: "회전하는 LP와 턴테이블의 3D 미리보기",
  },
  {
    year: "2026",
    title: "LOTTE WORLD TOWER",
    category: "건축 · 서울",
    description: "서울의 랜드마크를 유리 외벽과 첨탑까지 3D로 구성했습니다. 드래그해 둘러보세요.",
    tags: ["Three.js", "Procedural 3D"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/lotte-tower",
    demo: "/lotte-tower/",
    preview: "/project-previews/tower.webp",
    previewAlt: "롯데월드타워 3D 모델의 미리보기",
  },
  {
    year: "2026",
    title: "PORSCHE TAYCAN",
    category: "자동차 · 3D 모델",
    description: "타이칸 터보 GT의 실제 형상을 3D로 감상하세요. 차체 색상을 바꾸며 360도로 살펴볼 수 있습니다.",
    tags: ["Three.js", "glTF", "Orbit Controls"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/taycan",
    demo: "/taycan/",
    preview: "/project-previews/taycan.jpg",
    previewAlt: "포르쉐 타이칸 3D 모델의 미리보기",
  },
  {
    year: "2026",
    title: "SCREW WORKS",
    category: "스마트 팩토리 · 시뮬레이션",
    description: "거대한 나사 공장의 5개 공정을 둘러보세요. 설비를 선택해 작업 애니메이션과 시뮬레이션 대시보드를 확인할 수 있습니다.",
    tags: ["Three.js", "Procedural 3D", "Dashboard"],
    repo: "https://github.com/C17AN/c17an.github.io/tree/master/static/smart-factory",
    demo: "/smart-factory/",
    preview: "/project-previews/factory.jpg",
    previewAlt: "나사 스마트 공장의 3D 생산 라인 미리보기",
  },
];

export default function ProjectsPage(): JSX.Element {
  const pageRef = useProjectsMotion();

  return (
    <Layout title="Three.js 프로젝트" description="Three.js로 만든 인터랙티브 3D 프로젝트 모음">
      <main className={styles.page} ref={pageRef}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <div>
              <p className={styles.eyebrow} data-motion-hero>인터랙티브 3D 프로젝트</p>
              <h1>
                <span className={styles.heroLine} data-motion-hero>코드로 만든</span>
                <span className={styles.heroLineAccent} data-motion-hero>장면들.</span>
              </h1>
            </div>
            <p className={styles.intro} data-motion-hero>
              Three.js로 구현한 장면들입니다. 이미지를 눌러 직접 움직이고 살펴보세요.
            </p>
          </header>

          <section id="works" aria-labelledby="works-title">
            <div className={styles.sectionHeading} data-motion-section>
              <h2 id="works-title">프로젝트</h2>
              <span>{projects.length}개 작업</span>
            </div>
            <div className={styles.projectList}>
              {projects.map((project, index) => (
                <article className={styles.project} key={project.demo} data-motion-project>
                  <a className={styles.preview} href={project.demo} aria-label={`${project.title} 프로젝트 열기`} data-motion-preview>
                    <img
                      src={project.preview}
                      alt={project.previewAlt}
                      width="762"
                      height="660"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </a>
                  <div className={styles.projectBody} data-motion-body>
                    <p className={styles.meta}>{project.category} <span>·</span> {project.year}</p>
                    <h3><a href={project.demo}>{project.title}</a></h3>
                    <p className={styles.description}>{project.description}</p>
                    <ul className={styles.tags} aria-label="사용 기술">
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className={styles.links}>
                      <a href={project.demo}>프로젝트 체험 <span aria-hidden="true">↗</span></a>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        소스 코드 <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
