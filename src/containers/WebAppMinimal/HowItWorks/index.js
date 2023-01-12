import React from "react";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Link from "common/components/Link";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Section, {
  SectionHeading,
  Grid,
  GridForSS,
  Item,
} from "./howItWorks.style";
import parallaxBg from "common/assets/image/webAppMinimal/parallax-1.png";

import { HowTosScreenshots } from "common/data/WebAppMinimal";

const HowItWorks = ({ count = 0 }) => {
  const data =
    count > 0 && count < HowTosScreenshots.length
      ? HowTosScreenshots.slice(0, count)
      : HowTosScreenshots;

  return (
    <Section
      bgImage={parallaxBg?.src}
      bgImageAlt="the cat"
      strength={200}
      id="case-studies"
    >
      <Container>
        <SectionHeading>
          <Heading content="Our Ai White Label Package" />
        </SectionHeading>

        <GridForSS>
          {data.map((howTo) => (
            <Item key={howTo.id}>
              <figure>
                <NextImage src={howTo.icon} alt="icon" />
              </figure>
              <Heading as="h4" content={howTo.title} />
              {/* <Text content={howTo.text} /> */}
            </Item>
          ))}
        </GridForSS>
      </Container>
    </Section>
  );
};

export default HowItWorks;
