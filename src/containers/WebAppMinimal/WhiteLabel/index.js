import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import {
  Section,
  Grid,
  FooterWidget,
  SectionHeading,
} from "./whiteLabel.style";
import WhiteLabelData from "common/data/WhiteLabel/index";
import { Icon } from "react-icons-kit";
import { handORight } from "react-icons-kit/fa/handORight";

const WhiteLabelGrid = () => {
  return (
    <Section>
      <Container width="1400px">
        <SectionHeading>
          <Heading content={WhiteLabelData.title} />
        </SectionHeading>
        <Grid>
          {WhiteLabelData.grid.map((item) => (
            <FooterWidget key={item.id}>
              <ul>
                {item.map((item) => (
                  <li className="custom-row" key={item.id}>
                    <Icon icon={handORight} className="icon" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhiteLabelGrid;
