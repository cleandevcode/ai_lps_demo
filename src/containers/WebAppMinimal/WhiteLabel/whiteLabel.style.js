import styled from "styled-components";
import { Parallax } from "react-parallax";
import pattern1 from "common/assets/image/webAppMinimal/banner-pattern-1.png";

const Section = styled(Parallax)`
  background-color: #011336;
  color: white;
  padding-top: 130px;
  padding-bottom: 130px;
  overflow: unset !important;
  &::before {
    background: url(${pattern1?.src}) no-repeat;
    width: 674px;
    top: 0;
    content: "";
    position: absolute;
    height: 811px;
    @media only screen and (max-width: 767px) {
      background-size: 12%;
    }
    @media only screen and (min-width: 768px) {
      background-size: 45%;
    }
    @media only screen and (min-width: 1024px) {
      display: block;
      background-size: 24%;
    }
    @media only screen and (min-width: 1440px) {
      background-size: 60%;
    }
    @media only screen and (min-width: 1600px) {
      background-size: 82%;
    }
  }
  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 60px;
  }
  .react-parallax-bgimage {
    z-index: 10;
  }
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
  .react-parallax-content {
    z-index: 10;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ul {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterWidget = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    flex: 0 0 100%;
  }
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.38;
    margin: 0 0 25px;
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  .custom-row {
    display: flex;
    align-items: center;
  }

  .icon {
    width: 30px;
  }

  .rc-collapse-header-text {
    color: white;
    font-weight: 500;
  }

  .rc-collapse-content {
    background-color: transparent;
    border-bottom: unset;
    margin-left: 30px;
  }

  .rc-collapse > .rc-collapse-item {
    border: unset;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  h2 {
    font-weight: 800;
    line-height: 36px;
    letter-spacing: -0.5px;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const AccordionContent = styled.span`
  color: white;
`;

export const ServiceText = styled.p`
  font-size: 12px;
  background-color: transparent;
`;
export default Section;
