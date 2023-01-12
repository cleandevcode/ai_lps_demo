import React, { useState } from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Section, {
  Grid,
  FooterWidget,
  SectionHeading,
  AccordionContent,
} from "./whiteLabel.style";
import WhiteLabelData from "common/data/WhiteLabel/index";
import { Icon } from "react-icons-kit";
import { handORight } from "react-icons-kit/fa/handORight";
import Collapse, { Panel } from "rc-collapse";
import motion from "../Faq/motion-util";

const WhiteLabelGrid = () => {
  const [activeKey, setActiveKey] = useState(-1);
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
                <Collapse
                  accordion
                  activeKey={activeKey}
                  onChange={setActiveKey}
                  style={{ backgroundColor: "transparent", border: "unset" }}
                  openMotion={motion}
                >
                  {item.map((item) => (
                    <Panel
                      key={item.id}
                      showArrow={false}
                      style={{ color: "white" }}
                      header={
                        <li className="custom-row" key={item.id}>
                          <Icon icon={handORight} className="icon" />
                          <span>{item.title}</span>
                          {item.aiTools && (
                            <i>{`(${item.aiTools} Ai Tools)`}</i>
                          )}
                        </li>
                      }
                    >
                      <AccordionContent>{item.content}</AccordionContent>
                    </Panel>
                  ))}
                </Collapse>
              </ul>
            </FooterWidget>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhiteLabelGrid;
