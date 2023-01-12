import React from 'react';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, { Grid, SectionHeading, Item} from './FourStepsToSuccess.style';
import parallaxBg from 'common/assets/image/webAppMinimal/parallax-1.png';
import { howTos } from 'common/data/WebAppMinimal';

const FourStepsToSuccess = () => {
  return (
    <Section bgImage={parallaxBg?.src} bgImageAlt="the cat"   strength={200}>
      <Container width="1400px">
      <SectionHeading>
          <Heading content="4 Steps To Success" />
      </SectionHeading>

        <Grid>
        
          {howTos.map((howTo) => (
            <Item key={howTo.id}>
              <figure>
                <NextImage src={howTo.icon} alt="icon" />
              </figure>
              <Heading as="h4" content={howTo.title} />
              <Text style={{color:'white'}} content={howTo.text} />

            </Item>
          ))}


        </Grid>
      </Container>
    </Section>
  );
};

export default FourStepsToSuccess;
