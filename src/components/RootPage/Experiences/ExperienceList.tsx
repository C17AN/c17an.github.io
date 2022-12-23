import styled from "@emotion/styled";
import React from "react";
import Experience, { IExperience } from "./Experience";

type Props = {};

const ExperienceList = (props: Props) => {
  return (
    <ExperienceListContainer>
      {EXPERIENCE_LIST.map((experience) => (
        <Experience key={experience.title} {...experience} />
      ))}
    </ExperienceListContainer>
  );
};

const ExperienceListContainer = styled.div`
  margin-bottom: 40px;
`;

const EXPERIENCE_LIST: IExperience[] = [
  {
    title: "프론트엔드 개발자",
  },
  {
    title: "프론트엔드 개발자",
  },
];

export default ExperienceList;
