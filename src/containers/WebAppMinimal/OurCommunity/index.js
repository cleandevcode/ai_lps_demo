import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
// import Image from 'common/components/Image';
import Image from 'next/image'
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import worldmap from 'common/assets/image/saasCreative/globe125.png';

import dashboard1 from 'common/assets/image/saasCreative/dashboard1.png';
import dashboard2 from 'common/assets/image/saasCreative/dashboard2.png';
import dashboard3 from 'common/assets/image/saasCreative/dashboard3.png';

import Section, { SectionHeading, Figure, GridForSS, Item, ImageWrap } from './community.style';
import { OurCommunityScreenshots } from 'common/data/WebAppMinimal';


const OurCommunity = () => {
  return (
    <Section>
      <Container width="1400px">
        <SectionHeading>
          {/* <Text className="slogan" content="Our Community" /> */}
          
          <SectionHeading>
          <Heading content="Our Features At A Glance" />
        </SectionHeading>          <Text
            className="description"
            content=""
          />
        </SectionHeading>

        <GridForSS>

          <Item style={{ marginTop: '100px', borderRadius: '5px' }}>
            <ImageWrap>
              <Image src={dashboard1} alt="icon" />
            </ImageWrap>
          </Item>

          <Item style={{ marginTop: '50px', marginLeft: '-13rem', borderRadius: '5px' }}>
            <ImageWrap>
              <Image src={dashboard2} alt="icon" />
            </ImageWrap>
          </Item>

          <Item style={{ marginLeft: '-13rem', borderRadius: '5px' }}>
            <ImageWrap >
              <Image src={dashboard3} alt="icon" />
            </ImageWrap>
          </Item>


          {/* {
        OurCommunityScreenshots.map((OurCommunityScreenshot) => (
            <Item key={OurCommunityScreenshot.id}>
              <figure>
                <NextImage src={OurCommunityScreenshot.icon} alt="icon" />
              </figure>
              <Heading as="h4" content={OurCommunityScreenshot.title} />
              <Text content={OurCommunityScreenshot.text} />
            
            </Item>
          ))} */}

        </GridForSS>
    
        <Fade up>
    
        <SectionHeading>
          {<Text className="slogan" content="" />}
          {<Text className="slogan" content="" />}
          {<Text className="slogan" content="" />}
          {/* <Heading content="The Worlds Information At Your Fingertips." /> */}
          <Text
            className="description"
            content=""
          />
        </SectionHeading>

          {/* <Figure>
            <NextImage  src={worldmap} alt="users" />
          </Figure> */}
        </Fade>
      </Container>
    </Section>
  );
};

export default OurCommunity;
