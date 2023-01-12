import "animate.css";
import "bootstrap/dist/css/bootstrap.css";
import ResetCSS from "../../common/assets/css/style";
import { DrawerProvider } from "../../common/contexts/DrawerContext";
import { theme } from "../../common/theme/webAppMinimal";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { check } from "react-icons-kit/feather/check";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Navbar from "../../containers/WebAppMinimal/NavbarForOtherPages";
import Button from "common/components/Button";
import Text from "common/components/Text";
import Link from "common/components/Link";
import Heading from "common/components/Heading";
import Head from "next/head";
import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import Section, {
  Grid,
  Figure,
  Content,
  Features,
  contentDiv,
} from "./CustomerSupport.style";
import {
  ContentWrapper,
  GlobalStyle,
} from "../../containers/WebAppMinimal/webAppMinimal.style";
import parallaxBg from "common/assets/image/webAppMinimal/parallax-1.png";
import app from "common/assets/image/webAppMinimal/CustomerSupport.png";
import Footer from "../../containers/WebAppMinimal/Footer";
import { customersupportdata } from "common/data/WebAppMinimal";
import Form from "../../containers/WebAppMinimal/contactform/index";
const CustomerSupport = () => {
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

          <Section
            bgImage={parallaxBg?.src}
            bgImageAlt="the cat"
            strength={200}
          >
            <Container width="1400px">
              <Grid>
                <Content>
                  {/* <Text className="subtitle" content={analyticsTool.slogan} /> */}
                  <Heading content={customersupportdata.title} />
                  <Text
                    className="description"
                    content={customersupportdata.desc}
                  />
                  <Features>
                    {customersupportdata.features.map((feat, i) => (
                      <li key={i}>
                        <Icon icon={check} size={22} />
                        {feat}
                      </li>
                    ))}

                    <div class="col-12 ">
                      <a href="#get_started_form">
                        <button type="submit" class="btn btn-primary">
                          Get Started
                        </button>
                      </a>
                    </div>
                  </Features>
                  <br />
                  <br />
                </Content>
                <Figure>
                  <Fade up>
                    <NextImage src={app} alt="analytics" />
                  </Fade>
                </Figure>
              </Grid>
            </Container>
          </Section>

          <div className="col-12 p-5">
            <Heading
              style={{ fontWeight: "bold", fontSize: "35px", width: "50%" }}
              as="h1"
              content={customersupportdata.heading1}
            />
            <Text content={customersupportdata.content1} />
            <Text content={customersupportdata.content2} />
            <Text content={customersupportdata.content3} />

            <Form id="get_started_form" />
          </div>

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default CustomerSupport;