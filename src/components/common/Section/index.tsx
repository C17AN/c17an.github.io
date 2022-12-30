import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <SectionContainer>{children}</SectionContainer>;
};

const SectionContainer = styled.section`
  height: 100vh;
`;

export default Section;
