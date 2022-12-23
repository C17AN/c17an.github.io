import useBaseUrl from "@docusaurus/useBaseUrl";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

/**
 *
 * @Description
 * 로컬 파일 시스템에서 이미지를 불러올 때는 @site/static 접두어를 붙여주어야 한다.
 * 접두어에 상관없이 동일한 이미지를 렌더할 수 있도록 해주는 컴포넌트이다.
 */
const DocusaurusImage = ({ src, alt, ...props }: Props) => {
  const isStaticImage = src.startsWith("@site/static");

  return (
    <img
      src={useBaseUrl(isStaticImage ? src.replace("@site/static", "") : src)}
      alt={alt}
      {...props}
    />
  );
};

export default DocusaurusImage;
