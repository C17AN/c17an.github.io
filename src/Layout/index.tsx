import styled from "@emotion/styled";
import DocusaursLayout from "@theme/Layout";
import { AnimatePresence } from "framer-motion";
import React, { ComponentProps } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Layout = ({ children, ...rest }: ComponentProps<typeof Layout>) => {
  return (
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        {/* <Container> */}
        <DocusaursLayout {...rest}>{children}</DocusaursLayout>
        {/* </Container> */}
      </QueryClientProvider>
    </AnimatePresence>
  );
};

const Container = styled.div`
  position: relative;
  padding: 60px 0 120px 0;
  background-color: rgba(0, 0, 0, 0.02);
`;

export default Layout;
