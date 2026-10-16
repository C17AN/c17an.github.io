import React from "react";
import { Redirect } from "@docusaurus/router";

// Preserve existing project links while the gallery lives at the root.
export default function ProjectsRedirect(): JSX.Element {
  return <Redirect to="/" />;
}
