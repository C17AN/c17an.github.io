import DocusaursLayout from "@theme/Layout";
import { AnimatePresence } from "framer-motion";
import React, { ComponentProps } from "react";

const Layout = ({ children, ...rest }: ComponentProps<typeof Layout>) => {
  return (
    <AnimatePresence>
      <DocusaursLayout {...rest}>{children}</DocusaursLayout>
    </AnimatePresence>
  );
};

export default Layout;
