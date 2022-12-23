import React from "react";

export interface IExperience {
  title: string;
}

const Experience = ({ title }: IExperience) => {
  return <div>{title}</div>;
};

export default Experience;
