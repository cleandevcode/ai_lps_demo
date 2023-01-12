import blog3 from '../../../common/data/blogs/blog3';
import 'animate.css';
import ResetCSS from '../../../common/assets/css/style';
import { DrawerProvider } from '../../../common/contexts/DrawerContext';
import { theme } from '../../../common/theme/webAppMinimal';
import Navbar from '../../../containers/WebAppMinimal/Navbar';
import Heading from '../../../common/components/Heading';
import Text from '../../../common/components/Text';
import { ContentWrapper, GlobalStyle } from '../../../containers/WebAppMinimal/webAppMinimal.style';
import Head from 'next/head';
import Section, {ImageWrap}  from '../blogs.style'
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from  'styled-components';
import Image from 'next/image'
import post3 from 'common/assets/image/webAppMinimal/post3.png';
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

              
              <Heading style={{textAlign:'center', fontWeight: 'bold'}} as="h1" content={blog3.title} />
              <Text content={blog3.content} /> 

              <ImageWrap>
              <Image src={post3} />
              </ImageWrap>
              <Text content={blog3.content1} />

              <Text content={blog3.contentPoint1} />
              <Text content={blog3.contentPoint2} />
              <Text content={blog3.contentPoint3} />
              <Heading as="h5" content={blog3.heading} />
              
              <Heading style={{fontWeight: 'bold'}} as="h1" content={blog3.heading1} />
              <Text content={blog3.contentHeading1} />
              <Text content={blog3.contentHeading12} />

              <Heading style={{fontWeight: 'bold'}} as="h1" content={blog3.heading2} />
              <Text content={blog3.contentHeading2} />
              <Text content={blog3.contentHeading21} />

              <Heading style={{fontWeight: 'bold'}} as="h1" content={blog3.heading3} />
              <Text content={blog3.contentHeading3} />

              <Heading style={{fontWeight: 'bold'}} as="h1" content={blog3.heading4} />
              <Text content={blog3.contentHeading4} />
              <Text content={blog3.contentHeading41} />

              <Heading style={{fontWeight: 'bold'}} as="h1" content={blog3.heading5} />
              <Text content={blog3.contentHeading5} />



              <Text content={blog3.contentHeading4Point1} />
              <Text content={blog3.contentHeading4Point2} />
              <Text content={blog3.contentHeading4Point3} />
              <Text content={blog3.contentHeading4Point4} />    

              <Text content={blog3.contentHeading4Point5} />
              <Text content={blog3.contentHeading4Point6} />
              <Text content={blog3.contentHeading4Point7} />
              <Text content={blog3.contentHeading4Point8} />
              <Text content={blog3.contentHeading4Point9} />    

              </Section>
 
              <Footer />
            </ContentWrapper>
          </Fragment>
        </ThemeProvider>
      );
  }