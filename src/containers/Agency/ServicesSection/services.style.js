
import styled from 'styled-components';

const Section = styled.section`
  z-index: 0;
  &::after {
    background-color: #fff;
    content: '';
    position: absolute;
    width: 100%;
    bottom: -1px;
    height: 45px;
    @media only screen and (min-width: 768px) {
      bottom: -1px;
      height: 80px;
    }
    @media only screen and (min-width: 1024px) {
      height: 90px;
    }
    @media only screen and (min-width: 1280px) {
      height: 170px;
    }
    @media only screen and (min-width: 1366px) {
      height: 130px;
    }
  }
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
`;

export default Section;
