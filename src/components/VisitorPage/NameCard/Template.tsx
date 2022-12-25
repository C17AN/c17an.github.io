import styled from "@emotion/styled";
import React from "react";
import { useFormContext } from "react-hook-form";
import { INameCard } from ".";
import Text from "../../common/Text";

type Props = {};

const NameCardTemplate = (props: Props) => {
  const { getValues, watch } = useFormContext<INameCard>();
  const name = watch("name");
  const company = watch("company");
  const position = watch("position");

  return (
    <Container>
      <NameCard>
        <NameCardContent typography="p">{name}</NameCardContent>
        <NameCardContent typography="p">{company}</NameCardContent>
        <NameCardContent typography="p">{position}</NameCardContent>
      </NameCard>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NameCard = styled.div`
  background-color: white;
  width: 500px;
  height: 300px;
  padding: 32px 40px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 2px 2px 8px 8px rgba(0, 0, 0, 0.02);
`;

const NameCardContent = styled(Text)`
  margin-bottom: 12px;
  font-weight: 600;
  font-family: "pretendard";
  color: "#333";
`;

export default NameCardTemplate;
