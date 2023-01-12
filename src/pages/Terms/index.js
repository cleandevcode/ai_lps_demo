
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
import terms from '../../common/data/Terms/index'
import Footer from '../../containers/WebAppMinimal/Footer';

export default function  Terms() {  
   
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

              <Heading style={{ fontWeight: 'bold', fontSize:'40px', fontFamily:'Serif'}} as="h1" content={terms.title} />
              <Text style={{fontWeight: 'bold'}} content={terms.updateDate} /><br/>

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading1} />
              <Text content={terms.content11} />
              <Text content={terms.content12} />
              <Text content={terms.content13} />
              <Text content={terms.content14} />
              <Text content={terms.content15} />
              <Text content={terms.content16} />
             
              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading2} />
              <Text content={terms.content21} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading3} />
              <Text content={terms.content31} />
              <Text content={terms.content32} />
              <Text content={terms.content33} />
              <Text content={terms.content34} />
              <Text content={terms.content35} />


              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading4} />
              <Text content={terms.content41} />
              <Text content={terms.content42_p1} />
              <Text content={terms.content42_p2} />
              <Text content={terms.content42_p3} />
              <Text content={terms.content42_p4} />
              <Text content={terms.content42_p5} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading5} />
              <Text content={terms.content51} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading6} />
              <Text content={terms.content61} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading7} />
              <Text content={terms.content71} />
              <Text content={terms.content72} />
              <Text content={terms.content73} />
              <Text content={terms.content74} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading8} />
              <Text content={terms.content81} />
              <Text content={terms.content82} />
              <Text content={terms.content83} />
              <Text content={terms.content84} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading9} />
              <Text content={terms.content91} />
              <Text content={terms.content92} />
              <Text content={terms.content93} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading10} />
              <Text content={terms.content101} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading11} />
              <Text content={terms.content111} />
              <Text content={terms.content112} />
              <Text content={terms.content113} />
              <Text content={terms.content114} />
              <Text content={terms.content115} />
              <Text content={terms.content116} />  
              <Text content={terms.content117} />
              <Text content={terms.content118} />
              <Text content={terms.content119} />
              <Text content={terms.content1110} /> 

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading12} />
              <Text content={terms.content121} />
              <Text content={terms.content122_p1} />
              <Text content={terms.content122_p2} />
              <Text content={terms.content122_p3} />
              <Text content={terms.content122_p4} />
              <Text content={terms.content122_p5} />
              <Text content={terms.content122_p6} />
              <Text content={terms.content122_p7} /> 

              <Text content={terms.content123} />
              <Text content={terms.content123_p1} />
              <Text content={terms.content123_p2} />
              <Text content={terms.content123_p3} />
              <Text content={terms.content123_p4} />
              <Text content={terms.content123_p5} />
              <Text content={terms.content123_p6} />
              <Text content={terms.content123_p7} /> 
              <Text content={terms.content123_p8} />
              <Text content={terms.content123_p9} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading13} />
              <Text content={terms.content131} />
              <Text content={terms.content132_p1} />
              <Text content={terms.content133} />
              <Text content={terms.content134} />
              <Text content={terms.content135} />
              <Text content={terms.content136_p1} />  
              <Text content={terms.content137} />
              <Text content={terms.content138} />
              <Text content={terms.content139} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading14} />
              <Text content={terms.content141} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading15} />
              <Text content={terms.content151} />
              <Text content={terms.content152} />
              <Text content={terms.content153} />
              <Text content={terms.content154} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading16} />
              <Text content={terms.content161} />


              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading17} />
              <Text content={terms.content171} />
              <Text content={terms.content172} />
              <Text content={terms.content173} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading18} />
              <Text content={terms.content181} />
              <Text content={terms.content182_p1} />
              <Text content={terms.content182_p2} />
              <Text content={terms.content182_p3} />
              <Text content={terms.content182_p4} />
              <Text content={terms.content182_p5} />
              <Text content={terms.content182_p6} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading19} />
              <Text content={terms.content191} />
              <Text content={terms.content192}   />
              <Text content={terms.content193_p1} />
              <Text content={terms.content194} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading20} />
              <Text content={terms.content201} />
              <Text content={terms.content202} />
              <Text content={terms.content203} />
              <Text content={terms.content204} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading21} />
              <Text content={terms.content211} />
              <Text content={terms.content212} />
              <Text content={terms.content213} />
              <Text content={terms.content214} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading22} />
              <Text content={terms.content221} />              

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading23} />
              <Text content={terms.content231} />
              <Text content={terms.content232} />
              <Text content={terms.content233} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading24} />
              <Text content={terms.content241} />
              <Text content={terms.content242} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading25} />
              <Text content={terms.content251} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading26} />
              <Text content={terms.content261} />
              <Text content={terms.content262} />
              <Text content={terms.content263} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading27} />
              <Text content={terms.content271} />
              <Text content={terms.content272} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading28} />
              <Text content={terms.content281} />

              <Text style={{ fontSize:'40px', fontFamily:'Serif'}} content={terms.heading29} />
              <Text content={terms.content291} />
              <Text content={terms.content292} />


              </Section>
 
              <Footer />
            </ContentWrapper>
          </Fragment>
        </ThemeProvider>
      );
  }