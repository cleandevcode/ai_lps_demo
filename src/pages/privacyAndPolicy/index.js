
import 'animate.css';
import ResetCSS from '../../common/assets/css/style';
import { DrawerProvider } from '../../common/contexts/DrawerContext';
import { theme } from '../../common/theme/webAppMinimal';
import Navbar from '../../containers/WebAppMinimal/NavBarBlog';
import Heading from '../../common/components/Heading';
import Text from '../../common/components/Text';
import { ContentWrapper, GlobalStyle } from '../../containers/WebAppMinimal/webAppMinimal.style';
import Section, {ImageWrap} from '../newsfeed/blogs.style'
import Head from 'next/head';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from  'styled-components';
import PrivacyAndPolicy from '../../common/data/PrivacyAndPolicy/index'
import { color } from 'styled-system';
import Footer from '../../containers/WebAppMinimal/Footer';

export default function  privacyAndPolicy() {  
   
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

              <Heading style={{ fontWeight: 'bold', fontSize:'40px', fontFamily:'Serif'}} as="h1" content={PrivacyAndPolicy.title} />
              <Text style={{fontWeight: 'bold'}} content={PrivacyAndPolicy.updateDate} /><br/>
              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading1} />
              <Text content={PrivacyAndPolicy.content1} />
              <Text content={PrivacyAndPolicy.content2} />
              <Text content={PrivacyAndPolicy.content3} />
              <Text content={PrivacyAndPolicy.content4} />
              <Text content={PrivacyAndPolicy.content5} />
              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading2} />
              <Text content={PrivacyAndPolicy.content21} />
              <Text content={PrivacyAndPolicy.content22} />
              <Text content={PrivacyAndPolicy.content23} />
              <Text content={PrivacyAndPolicy.content24} />
              <Text content={PrivacyAndPolicy.content25} />
              <Text content={PrivacyAndPolicy.content26} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading3} />
              <Text content={PrivacyAndPolicy.content31} />
              

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading4} />
              <Text content={PrivacyAndPolicy.content41} />
              <Text content={PrivacyAndPolicy.content42} />
              <Text content={PrivacyAndPolicy.content43_p1} />
              <Text content={PrivacyAndPolicy.content43_p2} />
              <Text content={PrivacyAndPolicy.content43_p3} />
              <Text content={PrivacyAndPolicy.content43_p4} />
              <Text content={PrivacyAndPolicy.content44} />
              <Text content={PrivacyAndPolicy.content45} />
              <Text content={PrivacyAndPolicy.content46} />
              <Text content={PrivacyAndPolicy.content47} />
              <Text content={PrivacyAndPolicy.content48} />
              <Text content={PrivacyAndPolicy.content49} />
              <Text content={PrivacyAndPolicy.content410} />
              <Text content={PrivacyAndPolicy.content411} />
              <Text content={PrivacyAndPolicy.content412} />
              <Text content={PrivacyAndPolicy.content413} />
              <Text content={PrivacyAndPolicy.content414} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading5} />
              <Text content={PrivacyAndPolicy.content51} />
              <Text content={PrivacyAndPolicy.content52} />
              <Text content={PrivacyAndPolicy.content53_p1} />
              <Text content={PrivacyAndPolicy.content53_p2} />
              <Text content={PrivacyAndPolicy.content53_p3} />
              <Text content={PrivacyAndPolicy.content53_p4} />
              <Text content={PrivacyAndPolicy.content53_p5} />
              <Text content={PrivacyAndPolicy.content53_p6} />
              <Text content={PrivacyAndPolicy.content53_p7} />
              <Text content={PrivacyAndPolicy.content53_p8} />
              <Text content={PrivacyAndPolicy.content53_p9} />
              <Text content={PrivacyAndPolicy.content53_p10} />
              <Text content={PrivacyAndPolicy.content53_p11} />
              <Text content={PrivacyAndPolicy.content53_p12} />
              <Text content={PrivacyAndPolicy.content53_p13} />


              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading6} />
              <Text content={PrivacyAndPolicy.content61} />
              <Text content={PrivacyAndPolicy.content62} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading7} />
              <Text content={PrivacyAndPolicy.content71} />
              <Text content={PrivacyAndPolicy.content72} />
              <Text content={PrivacyAndPolicy.content73} />
              <Text content={PrivacyAndPolicy.content74} />


              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading6} />
              <Text content={PrivacyAndPolicy.content81} />
              <Text content={PrivacyAndPolicy.content82} />
              <Text content={PrivacyAndPolicy.content83} />
              <Text content={PrivacyAndPolicy.content84} />
              <Text content={PrivacyAndPolicy.content85_p1} />
              <Text content={PrivacyAndPolicy.content85_p2} />
              <Text content={PrivacyAndPolicy.content86} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading9} />
              <Text content={PrivacyAndPolicy.content91} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading10} />
              <Text content={PrivacyAndPolicy.content101} />
              <Text content={PrivacyAndPolicy.content102} />
              <Text content={PrivacyAndPolicy.content103} />
              <Text content={PrivacyAndPolicy.content104} />
              <Text content={PrivacyAndPolicy.content105_p1} />
              <Text content={PrivacyAndPolicy.content105_p2} />
              <Text content={PrivacyAndPolicy.content105_p3} />
              <Text content={PrivacyAndPolicy.content105_p4} />
              <Text content={PrivacyAndPolicy.content105_p5} />
              <Text content={PrivacyAndPolicy.content105_p6} />
              <Text content={PrivacyAndPolicy.content106} />
              <Text content={PrivacyAndPolicy.content107} />
             

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading11} />
              <Text content={PrivacyAndPolicy.content111} />
              <Text content={PrivacyAndPolicy.content112} />
              <Text content={PrivacyAndPolicy.content113} />
              <Text content={PrivacyAndPolicy.content114_p1} />
              <Text content={PrivacyAndPolicy.content114_p2} />
              <Text content={PrivacyAndPolicy.content114_p3} />
  
              <Text content={PrivacyAndPolicy.content115} />
              <Text content={PrivacyAndPolicy.content116} />
              <Text content={PrivacyAndPolicy.content117} />
              <Text content={PrivacyAndPolicy.content118} />
              
              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading12} />
              <Text content={PrivacyAndPolicy.content121} />
              <Text content={PrivacyAndPolicy.content122} />


              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading13} />
              <Text content={PrivacyAndPolicy.content131} />
              <Text content={PrivacyAndPolicy.content132} />
              <Text content={PrivacyAndPolicy.content133} />
              <Text content={PrivacyAndPolicy.content134} />
              <Text content={PrivacyAndPolicy.content135} />
              <Text content={PrivacyAndPolicy.content136} />
              <Text content={PrivacyAndPolicy.content137} />
              <Text content={PrivacyAndPolicy.content138} />
              <Text content={PrivacyAndPolicy.content139} />
              <Text content={PrivacyAndPolicy.content1310} />
              <Text content={PrivacyAndPolicy.content1311} />
              <Text content={PrivacyAndPolicy.content1312} />
              <Text content={PrivacyAndPolicy.content1314} />
              <Text content={PrivacyAndPolicy.content1315} />
              <Text content={PrivacyAndPolicy.content1316} />
              <Text content={PrivacyAndPolicy.content1317} />
              <Text content={PrivacyAndPolicy.content1318} />


              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading14} />
              <Text content={PrivacyAndPolicy.content141} />
              <Text content={PrivacyAndPolicy.content142} />
              <Text content={PrivacyAndPolicy.content143} />
              <Text content={PrivacyAndPolicy.content144} />
              <Text content={PrivacyAndPolicy.content145} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading15} />
              <Text content={PrivacyAndPolicy.content151} />
              <Text content={PrivacyAndPolicy.content152} />
              <Text content={PrivacyAndPolicy.content153} />
              <Text content={PrivacyAndPolicy.content154} />
              <Text content={PrivacyAndPolicy.content155} />
              <Text content={PrivacyAndPolicy.content156} />
              <Text content={PrivacyAndPolicy.content157} />
              <Text content={PrivacyAndPolicy.content158} />
              <Text content={PrivacyAndPolicy.content159} />
              <Text content={PrivacyAndPolicy.content1510} />
              <Text content={PrivacyAndPolicy.content1511} />
              <Text content={PrivacyAndPolicy.content1512} />
              <Text content={PrivacyAndPolicy.content1513} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading16} />
              <Text content={PrivacyAndPolicy.content161} />
              <Text content={PrivacyAndPolicy.content162} />
              <Text content={PrivacyAndPolicy.content163} />
              <Text content={PrivacyAndPolicy.content164} />
              <Text content={PrivacyAndPolicy.content165} />
              <Text content={PrivacyAndPolicy.content166} />
              <Text content={PrivacyAndPolicy.content167} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading17} />
              <Text content={PrivacyAndPolicy.content171} />
              <Text content={PrivacyAndPolicy.content172} />

              
              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading18} />
              <Text content={PrivacyAndPolicy.content181} />
              <Text content={PrivacyAndPolicy.content182} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading19} />
              <Text content={PrivacyAndPolicy.content191} />
              <Text content={PrivacyAndPolicy.content192} />
              <Text content={PrivacyAndPolicy.content193} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={PrivacyAndPolicy.heading20} />
              <Text content={PrivacyAndPolicy.content201} />
              <Text content={PrivacyAndPolicy.content202} />



              </Section>
 
              <Footer />
            </ContentWrapper>
          </Fragment>
        </ThemeProvider>
      );
  }