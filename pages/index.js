import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 16px;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>James Kim Dev</title>
        <meta name="description" content="James Kim Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </Container>
  );
}
