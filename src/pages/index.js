import "animate.css";
import ResetCSS from "common/assets/css/style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { theme } from "common/theme/webAppMinimal";
import AnalyticsTool from "containers/WebAppMinimal/AnalyticsTool";
import Banner from "containers/WebAppMinimal/Banner";
import CallToAction from "containers/WebAppMinimal/CallToAction";
import Clients from "containers/WebAppMinimal/Clients";
import Dashboard from "containers/WebAppMinimal/Dashboard";
import Faq from "containers/WebAppMinimal/Faq";
import Footer from "containers/WebAppMinimal/Footer";
import HowItWorks from "containers/WebAppMinimal/HowItWorks";
import FourStepsToSuccess from "containers/WebAppMinimal/FourStepsToSuccess";
import Navbar from "containers/WebAppMinimal/Navbar";
import NewsFeed from "containers/WebAppMinimal/NewsFeed";
import OurCommunity from "containers/WebAppMinimal/OurCommunity";
import Pricing from "containers/WebAppMinimal/Pricing";
import {
  ContentWrapper,
  GlobalStyle,
} from "containers/WebAppMinimal/webAppMinimal.style";
import Head from "next/head";
import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import ServicesSection from "containers/Agency/ServicesSection/index.jsx";
import BottomStickyBar from "containers/WebAppMinimal/bottomStickyBar/index";
import Link from "next/link";
import VideoSection from "containers/WebAppMinimal/VideoSection";

const WebAppMinimal = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>AI Creatives</title>
          <title>Web App Minimal | A react next landing page</title>

          <title>Ai Creatives - #1 AI Software</title>

          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          />
        </Head>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3M7RSTPNBE"
        ></script>
        <script>
         {
           window.dataLayer = window.dataLayer || [];

           function gtag()
           {
            dataLayer.push(arguments)
           }
           gtag('js', new Date()); gtag('config', 'G-3M7RSTPNBE');
          }
        </script> */}

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <BottomStickyBar />

          <Banner />
          <ServicesSection />
          {/* <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <BottomStickyBar />
          </Sticky>
          <ServicesSection /> */}

          {/* <Clients /> */}
          <VideoSection />
          <HowItWorks />

          <FourStepsToSuccess />

          {/* here we will add Our features at a glance component */}
          <OurCommunity />

          <AnalyticsTool />
          <Dashboard />

          <Pricing id="pricing" />
          <NewsFeed />

          <Faq />
          <CallToAction />

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default WebAppMinimal;
