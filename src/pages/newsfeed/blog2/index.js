import blog2 from '../../../common/data/blogs/blog2';
import 'animate.css';
import ResetCSS from '../../../common/assets/css/style';
import { DrawerProvider } from '../../../common/contexts/DrawerContext';
import { theme } from '../../../common/theme/webAppMinimal';
import Navbar from '../../../containers/WebAppMinimal/Navbar';
import Heading from '../../../common/components/Heading';
import Text from '../../../common/components/Text';
import { ContentWrapper, GlobalStyle } from '../../../containers/WebAppMinimal/webAppMinimal.style';
import Head from 'next/head';
import Section, {ImageWrap} from '../blogs.style'
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from  'styled-components';
import Image from 'next/image'
import post2 from 'common/assets/image/webAppMinimal/post2.png';
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
              <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <DrawerProvider>
                  <Navbar />
                </DrawerProvider>
              </Sticky>
             
             
              <Section>

              <Heading style={{textAlign:'center', fontWeight: 'bold'}} as="h1" content={blog2.title} />
              <Text content={blog2.content1} /> 
              <Text content={blog2.content2} /> 

              <ImageWrap>
              <Image src={post2} />
              </ImageWrap>


              <Text content={blog2.content3} /> 
              <Text content={blog2.content4} /> 
              <Text content={blog2.content5} /> 
              <Text content={blog2.content6} /> 
              
              </Section>
 
              <Footer />
            </ContentWrapper>
          </Fragment>
        </ThemeProvider>
      );
  }