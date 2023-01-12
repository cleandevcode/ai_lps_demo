import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Section, {
  Pattern,
  BannerContentWrapper,
  BannerContent,
  Figure,
} from "./banner.style";
import dashboard from "common/assets/image/webAppMinimal/dashboard.png";

const Banner = () => {
  return (
    <Section id="home">
      <Pattern />
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content="Discover, Explore, & Embrace the Future of AI Technology To Do the Work that You Don’t Want To"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join our Integrated Ai community to scale your business & save time by removing the guesswork with our proven technology, Don’t take our word for it…try it for yourself!"
            />
          </BannerContent>
          {/* <div className='col-sm-12 col-md-12 col-lg-12'>
          <NextImage src={dashboard} alt="dashboard" />
          </div>
        */}
          <Figure className="animate__animated animate__fadeInUp animate__fast">
            {/* <NextImage src={dashboard} alt="dashboard" /> */}
            <Text
              className="animate__animated animate__fadeInUp"
              content="A View Of Our User Friendly Dashboard"
            ></Text>
            <NextImage src={dashboard} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;