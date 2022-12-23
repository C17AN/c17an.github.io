import DocusaursLayout from "@theme/Layout";
import { AnimatePresence } from "framer-motion";
import React, { ComponentProps } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Layout = ({ children, ...rest }: ComponentProps<typeof Layout>) => {
  return (
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        <DocusaursLayout {...rest}>{children}</DocusaursLayout>
      </QueryClientProvider>
    </AnimatePresence>
  );
};

export default Layout;
