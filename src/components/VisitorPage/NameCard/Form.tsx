import styled from "@emotion/styled";
import React from "react";
import { useFormContext } from "react-hook-form";
import { INameCard } from ".";
import Chip from "../../common/Chip";
import Input from "../../common/Input";
import Text from "../../common/Text";

type Props = {};

const NameCardForm = (props: Props) => {
  const { register } = useFormContext<INameCard>();

  return (
    <NameCardFormContainer>
      <NameCardFormWrapper>
        <NameCardFormInput
          {...register("name")}
          label="이름"
          placeholder="김찬민"
        />
      </NameCardFormWrapper>
      <NameCardFormWrapper>
        <NameCardFormLabel>소속을 입력해주세요</NameCardFormLabel>
        <NameCardFormInput
          {...register("company")}
          // label="소속"
          placeholder="비바리퍼블리카"
        />
      </NameCardFormWrapper>
      <NameCardFormWrapper>
        <NameCardFormLabel>포지션을 선택해주세요</NameCardFormLabel>
        <Chip text="Frontend Developer" />
        <Chip text="Backend Developer" />
        <Chip text="Frontend Developer" />
        <Chip text="Frontend Developer" />
        <NameCardFormInput
          {...register("position")}
          placeholder="Frontend Developer"
        />
      </NameCardFormWrapper>
    </NameCardFormContainer>
  );
};

const NameCardFormContainer = styled.div`
  width: 80%;
`;

const NameCardFormLabel = styled(Text)`
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 24px;
`;

const NameCardFormInput = styled(Input)`
  font-size: 18px;
  width: 100%;
  border-color: rgba(0, 0, 0, 0.05);
`;

const NameCardFormWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: center;
  align-items: flex-start;
`;

export default NameCardForm;
