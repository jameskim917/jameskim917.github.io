import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 50px;
  margin-top: 75px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`;

const HeroProfile = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 999px;
  @media (max-width: 480px) {
    height: 100px;
    width: 100px;
  }
`;

const HeroInfo = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
  }
`;

const HeroText = styled.div`
  height: fit-content;
  width: fit-content;
  max-width: 610px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-family: Manrope, sans-serif;
  font-size: 48px;
  font-weight: 600;
`;

const Title = styled.h3`
  font-family: Manrope, sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: ${(props) => props.theme.textBlue};
`;

const Description = styled.p`
  font-family: Manrope, sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: ${(props) => props.theme.secondary};
  margin-top: 4px;
`;

const HeroIcons = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 16px;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const HeroIconsLeft = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 16px;
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroIconsRight = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 16px;
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroIcon = styled.div`
  height: 85px;
  width: 85px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 15px 2px rgba(0, 0, 0, 0.2);
`;

const Portfolio = styled.div`
  height: fit-content;
  width: fit-content;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 75px;
`;

const Header = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const Overlay = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  visibility: ${(props) =>
    props.selected === undefined ? "hidden" : "visible"};
  pointer-events: ${(props) =>
    props.selected === undefined ? "none" : "auto"};
`;

const ProjectsContainer = styled.div`
  height: 724px;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

const Project = styled.div`
  height: 346px;
  width: 486px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.bg};
  border-radius: 25px;
  z-index: 1;
  padding: 0;
  margin-left: 0;
`;

const ProjectPlaceholder = styled.div`
  height: 346px;
  width: 486px;
  background-color: ${(props) => props.theme.bg};
`;

const ProjectImage = styled.div`
  position: relative;
  height: 346px;
  width: 486px;
  border-radius: 25px;
`;

const ImageGradient = styled.div`
  position: absolute;
  background: linear-gradient(${(props) => props.color}, rgba(0, 0, 0, 0.6));
  height: 346px;
  width: 486px;
  border-radius: 25px;
`;

const ProjectInfo = styled.div`
  z-index: 1;
  position: absolute;
  top: 240px;
  left: 16px;
  height: fit-content;
  width: auto;
  max-width: 465px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 24px;
`;

const ProjectText = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const ProjectLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  line-height: 1;
`;

const ProjectLabel = styled.h5`
  font-size: 18px;
  font-weight: 400;
`;
const ProjectDescription = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.secondary};
  visibility: hidden;
  opacity: 0;
`;

const ProjectButtons = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 16px;
  visibility: hidden;
  opacity: 0;
`;

const DemoButton = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  font-size: 15px;
  font-weight: 500;
`;

const GithubButton = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.bg};
  font-size: 15px;
  font-weight: 500;
`;

export default function Home() {
  const [selected, setSelected] = React.useState();
  const theme = useTheme();
  return (
    <Container>
      <Head>
        <title>James Kim Dev</title>
        <meta name="description" content="James Kim Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero>
          <HeroProfile>
            <Image
              src="/profile.png"
              layout="fill"
              style={{ borderRadius: 999 }}
            />
          </HeroProfile>
          <HeroInfo>
            <HeroText>
              <Name>James Kim</Name>
              <Title>Web Developer</Title>
              <Description>
                I’m a self-taught web developer building digital experiences
                with full-stack technologies.
              </Description>
            </HeroText>
            <HeroIcons>
              <HeroIconsLeft>
                <HeroIcon>
                  <Image src="/JSlogo.png" height={60} width={60} />
                </HeroIcon>
                <HeroIcon>
                  <Image src="/TSlogo.png" height={60} width={60} />
                </HeroIcon>
                <HeroIcon>
                  <Image src="/Reactlogo.png" height={54} width={61} />
                </HeroIcon>
              </HeroIconsLeft>
              <HeroIconsRight>
                <HeroIcon>
                  <Image src="/Nodelogo.png" height={24} width={60} />
                </HeroIcon>
                <HeroIcon>
                  <Image src="/Pythonlogo.png" height={54} width={54} />
                </HeroIcon>
                <HeroIcon>
                  <Image src="/GraphQLlogo.png" height={58} width={58} />
                </HeroIcon>
              </HeroIconsRight>
            </HeroIcons>
          </HeroInfo>
        </Hero>

        <Portfolio>
          <Header>Portfolio</Header>
          <Overlay
            as={motion.div}
            animate={{ opacity: selected !== undefined ? 1 : 0 }}
            selected={selected}
            onClick={() => setSelected(undefined)}
          />
          <ProjectsContainer>
            <Project
              className={selected === 0 && "selected-project"}
              as={motion.div}
              layout
              selected={selected}
              style={{
                originX: 0,
                originY: 0,
                marginTop: selected === 0 ? -189 : 0,
              }}
              onClick={() => setSelected(0)}
            >
              <ProjectInfo
                selected={selected}
                className={selected === 0 ? "selected-project-info" : ""}
              >
                <ProjectText as={motion.div} layout>
                  <ProjectTitle
                    selected={selected}
                    style={{ color: selected === 0 ? theme.primary : "#fff" }}
                  >
                    Real Estate Admin Panel
                  </ProjectTitle>
                  <ProjectLabels
                    selected={selected}
                    style={{ color: selected === 0 ? theme.textBlue : "#fff" }}
                  >
                    <ProjectLabel>React</ProjectLabel>
                    <ProjectLabel>Typescript</ProjectLabel>
                    <ProjectLabel>Node.js</ProjectLabel>
                    <ProjectLabel>GraphQL</ProjectLabel>
                    <ProjectLabel>MySQL</ProjectLabel>
                    <ProjectLabel>Google Cloud API</ProjectLabel>
                    <ProjectLabel>JWT Authentication</ProjectLabel>
                  </ProjectLabels>
                  <ProjectDescription
                    selected={selected}
                    className={selected === 0 && "selected-project-visible"}
                  >
                    A web admin dashboard panel for managing real estate
                    listings, appointments and clients. The authenticated user
                    can create, edit, delete, view, publish and sort through
                    listings. The listings system is fetched from and called to
                    a Node.js server and MySQL database. Appointments and
                    clients are synced with Google Calendar and Contacts through
                    Cloud APIs.
                  </ProjectDescription>
                </ProjectText>
                <ProjectButtons
                  selected={selected}
                  className={selected === 0 && "selected-project-visible"}
                >
                  <DemoButton>Live Demo</DemoButton>
                  <GithubButton>Github Repo</GithubButton>
                </ProjectButtons>
              </ProjectInfo>
              <ProjectImage as={motion.div} layout>
                <Image
                  src="/Project1.png"
                  layout="fill"
                  style={{ borderRadius: 25 }}
                />
                <ImageGradient
                  as={motion.div}
                  color="rgba(97, 218, 251, 0.25)"
                  animate={
                    selected === 0
                      ? { opacity: 0, visibility: "hidden" }
                      : { opacity: 1, visibility: "visible" }
                  }
                />
              </ProjectImage>
            </Project>
            {selected === 0 && <ProjectPlaceholder />}

            <Project
              className={selected === 1 && "selected-project"}
              as={motion.div}
              layout
              selected={selected}
              style={{
                originX: 0,
                originY: 0,
                marginTop: selected === 1 ? -189 : 0,
              }}
              onClick={() => setSelected(1)}
            >
              <ProjectImage as={motion.div} layout>
                <Image
                  src="/Project2.png"
                  layout="fill"
                  style={{ borderRadius: 25 }}
                />
                <ImageGradient
                  as={motion.div}
                  color="rgba(187, 189, 237, 0.25)"
                  animate={
                    selected === 1
                      ? { opacity: 0, visibility: "hidden" }
                      : { opacity: 1, visibility: "visible" }
                  }
                />
              </ProjectImage>
              <ProjectInfo
                selected={selected}
                className={selected === 1 ? "selected-project-info" : ""}
              >
                <ProjectText as={motion.div} layout>
                  <ProjectTitle
                    selected={selected}
                    style={{ color: selected === 1 ? theme.primary : "#fff" }}
                  >
                    Language Learning App
                  </ProjectTitle>
                  <ProjectLabels
                    selected={selected}
                    style={{ color: selected === 1 ? theme.textBlue : "#fff" }}
                  >
                    <ProjectLabel>React Native</ProjectLabel>
                    <ProjectLabel>Typescript</ProjectLabel>
                    <ProjectLabel>React Query</ProjectLabel>
                    <ProjectLabel>Google Cloud Translate API</ProjectLabel>
                  </ProjectLabels>
                  <ProjectDescription
                    selected={selected}
                    className={selected === 1 && "selected-project-visible"}
                  >
                    Mobile application for users to save terms and definitions
                    to a wordbook. Users can translate words via Google
                    Translate in real-time and view Naver dictionary definitions
                    in a webview modal. Data is saved and cached locally for
                    optimal performance.
                  </ProjectDescription>
                </ProjectText>
                <ProjectButtons
                  selected={selected}
                  className={selected === 1 && "selected-project-visible"}
                >
                  <DemoButton>Live Demo</DemoButton>
                  <GithubButton>Github Repo</GithubButton>
                </ProjectButtons>
              </ProjectInfo>
            </Project>
            {selected === 1 && <ProjectPlaceholder />}

            <Project>
              <ProjectImage>
                <Image
                  src="/Project3.png"
                  layout="fill"
                  style={{ borderRadius: 25 }}
                />
              </ProjectImage>
              <ProjectInfo>
                <ProjectText>
                  <ProjectTitle>Community Marketplace</ProjectTitle>
                  <ProjectLabels>
                    <ProjectLabel>React</ProjectLabel>
                    <ProjectLabel>Django</ProjectLabel>
                    <ProjectLabel>SQLite</ProjectLabel>
                    <ProjectLabel>Auth0</ProjectLabel>
                    <ProjectLabel>REST API</ProjectLabel>
                  </ProjectLabels>
                  <ProjectDescription>
                    Web application for users to buy and sell goods. Users can
                    register for accounts to create, edit, delete and view
                    items. Other features including liking and saving items to
                    view later, real-time comment messaging and filtering
                    through items. Designed for both mobile and desktop media
                    breakpoints.
                  </ProjectDescription>
                </ProjectText>
                <ProjectButtons>
                  <DemoButton>Live Demo</DemoButton>
                  <GithubButton>Github Repo</GithubButton>
                </ProjectButtons>
              </ProjectInfo>
            </Project>
          </ProjectsContainer>
        </Portfolio>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </Container>
  );
}
