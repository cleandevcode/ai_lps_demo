import "animate.css";
import ResetCSS from "../../common/assets/css/style";
import { DrawerProvider } from "../../common/contexts/DrawerContext";
import { theme } from "../../common/theme/webAppMinimal";
import Navbar from "../../containers/WebAppMinimal/NavBarBlog";
import Heading from "../../common/components/Heading";
import Text from "../../common/components/Text";
import {
  ContentWrapper,
  GlobalStyle,
} from "../../containers/WebAppMinimal/webAppMinimal.style";
import Section, { ImageWrap } from "../newsfeed/blogs.style";
import { Grid, Figure, Content } from "./about.style";
import NextImage from "common/components/NextImage";
import Head from "next/head";
import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import About from "../../common/data/About/index";
import Footer from "../../containers/WebAppMinimal/Footer";
import app from "common/assets/image/webAppMinimal/aboutus.png";
import Fade from "react-reveal/Fade";

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>AI Creatives</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <Section>
            <Grid>
              <Content>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: "50px",
                    fontFamily: "Serif",
                  }}
                  content={About.title}
                />
                <Heading
                  style={{ fontSize: "30px", fontFamily: "Serif" }}
                  as="h1"
                  content={About.heading}
                />
                <Text content={About.subHeading} />
              </Content>
              <Figure>
                <Fade up>
                  <NextImage src={app} alt="analytics" />
                </Fade>
              </Figure>
            </Grid>
             <br/>     
           

               {About.questions.map(item=>{
                    return (<>
                    <Text style={{fontWeight:'bold'}} content={item.question} />
                    <Text content={item.ans} />
                    </>);
               })} 
               
         

          </Section>

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
}
