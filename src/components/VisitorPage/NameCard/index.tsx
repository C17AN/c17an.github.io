import styled from "@emotion/styled";
import React from "react";
import NameCardForm from "./Form";
import NameCardTemplate from "./Template";
import { FormProvider, useForm } from "react-hook-form";

type Props = {};

export interface INameCard {
  name: string;
  company: string;
  position: string;
  email: string;
}

const NameCard = (props: Props) => {
  const formMethods = useForm<INameCard>({
    mode: "onChange",
    defaultValues: {
      name: "김찬민",
      company: "비바리퍼블리카",
      position: "Frontend Developer",
      email: "chanmin@toss.im",
    },
  });

  return (
    <>
      <FormProvider {...formMethods}>
        <NameCardTemplate />
        <Container>
          <NameCardForm />
        </Container>
      </FormProvider>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  overflow: scroll;
  width: 100%;
  scroll-snap-align: center;
  scroll-snap-type: y mandatory;
`;

const NameCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default NameCard;
