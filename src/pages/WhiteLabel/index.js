import "animate.css";
import ResetCSS from "../../common/assets/css/style";
import { DrawerProvider } from "../../common/contexts/DrawerContext";
import { theme } from "../../common/theme/webAppMinimal";
import Navbar from "../../containers/WebAppMinimal/NavBarBlog";
import Text from "../../common/components/Text";
import {
  ContentWrapper,
  GlobalStyle,
} from "../../containers/WebAppMinimal/webAppMinimal.style";
import NextImage from "common/components/NextImage";
import Head from "next/head";
import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import WhiteLabelData from "../../common/data/WhiteLabel/index";
import Footer from "../../containers/WebAppMinimal/Footer";
import WhiteLabelGrid from "containers/WebAppMinimal/WhiteLabel";
import OurCommunity from "containers/WebAppMinimal/OurCommunity";
import HowItWorks from "containers/WebAppMinimal/HowItWorks";
import Form from "containers/WebAppMinimal/contactform";
import NewsFeed from "containers/WebAppMinimal/NewsFeed";

export default function WhiteLabel() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>AI Creatives</title>
          <meta name="Description" content="white-label" />
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
          <div style={{ marginTop: 150 }}>
            <HowItWorks count={3} />
          </div>
          <WhiteLabelGrid />
          <div style={{ padding: 50 }}>
            <Text content={WhiteLabelData.content} />
          </div>
          <OurCommunity />
          <NewsFeed />
          <Form id="whitelabel_form" />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
}
