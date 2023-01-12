import blog1 from '../../../common/data/blogs/blog1';
import 'animate.css';
import ResetCSS from '../../../common/assets/css/style';
import { DrawerProvider } from '../../../common/contexts/DrawerContext';
import { theme } from '../../../common/theme/webAppMinimal';
import Navbar from '../../../containers/WebAppMinimal/NavBarBlog';
import Heading from '../../../common/components/Heading';
import Text from '../../../common/components/Text';
import { ContentWrapper, GlobalStyle } from '../../../containers/WebAppMinimal/webAppMinimal.style';
import Section, {ImageWrap} from '../blogs.style'
import Head from 'next/head';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from  'styled-components';
import Image from 'next/image'
import post1 from 'common/assets/image/webAppMinimal/post1.png';
import Footer from '../../../containers/WebAppMinimal/Footer';

export default function  NewFeed() {  
   
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
          <Sticky  top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          
             
              <Section>

              <Heading style={{textAlign:'center', fontWeight: 'bold'}} as="h1" content={blog1.title} />
              <Text content={blog1.content} />
              <Text content={blog1.content1} />
              
              <ImageWrap>
              <Image src={post1} />
              </ImageWrap>

              <Text content={blog1.content2} />


              <Heading style={{ fontWeight: 'bold'}} as="h1" content={blog1.subtitle1} />
              <Text content={blog1.contentSubTitleOne} />
              <Text content={blog1.contentSubTitleOne1} />
              <Text content={blog1.contentSubTitleOne2} />

              <Text content={blog1.contentSubTitleOnePoint1} />
              <Text content={blog1.contentSubTitleOnePoint2} />
              <Text content={blog1.contentSubTitleOnePoint3} />
              <Text content={blog1.contentSubTitleOnePoint4} />
              <Heading as="h5" content={blog1.text} />
              <Text content={blog1.contentSubTitleOnePoint5} />
              <Text content={blog1.contentSubTitleOnePoint6} />
              <Text content={blog1.contentSubTitleOnePoint7} />    

              </Section>
 
              <Footer />
            </ContentWrapper>
          </Fragment>
        </ThemeProvider>
      );
  }