import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { tabs } from 'common/data/WebAppMinimal';
import React from 'react';
import { Tab, TabPanel } from 'react-tabs';
import Section, {
  Illustration, ReactTabs, SectionHeading, TabNavbar, GridForSS, Item
} from './dashboard.style';


const Dashboard = () => {
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="This Is How AI Creative Works" />
          <Text content="" />
        </SectionHeading>
        <ReactTabs>
        <TabNavbar>


            

        <GridForSS>
            {tabs?.map((tab, index) => (
             
            <Item key={index}>
              <figure>
                <NextImage src={tab.nav.icon} alt={tab.nav.title} />
              </figure>
              <Heading as="h4" content={tab.nav.title} />            
            </Item>                    
            ))
            }

        </GridForSS>


          </TabNavbar>

          {/* {tabs?.map((tab) => (
            <TabPanel key={tab.id}>
              <Illustration className="animate__animated animate__fadeInUp">
                <NextImage src={tab.content.image} alt="dashboard" />
              </Illustration>
            </TabPanel>
          ))} */}
        </ReactTabs>
      </Container>
    </Section>
  );
};

export default Dashboard;
