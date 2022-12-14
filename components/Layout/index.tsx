import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Footer from "../Footer";

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
`;

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container>
        <Head>
          <title>Goaldime - We Help you to Grow Your Business Faster</title>
        </Head>
        {children}
      </Container>
      <Footer />
    </>
  );
}
