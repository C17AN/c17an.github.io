import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "../Layout";
import VisitorPage from "../components/VisitorPage";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return <header></header>;
}

export default function Visitor(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <VisitorPage />
      </main>
    </Layout>
  );
}
