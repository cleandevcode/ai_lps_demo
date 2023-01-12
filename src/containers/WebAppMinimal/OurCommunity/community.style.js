import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  @media (max-width: 1024px) {
    padding-bottom: 50px;
  }
  @media (max-width: 768px) {
    padding-bottom: 40px;
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

export const SectionHeading = styled.div`
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
  .slogan {
    color: ${themeGet('colors.secondary')};
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.005em;
    margin-bottom: 1.25rem;
  }
  h2 {
    font-weight: 800;
    font-size: 26px;
    letter-spacing: -0.5px;
    margin-bottom: 1.875rem;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
  .description {
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 17px;
    line-height: 2.06;
    margin-bottom: 0;
    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 1.8;
    }
  }
`;

// export const GridForSS = styled.div`
// gap: 40px;
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// margin-top: 80px;
// @media (max-width: 1280px) {
//   gap: 18px;
// }
// @media (max-width: 1024px) {
//   gap: 20px;
//   margin-top: 60px;
// }
// @media (max-width: 991px) {
//   grid-template-columns: repeat(1, 290px);
//   justify-content: center;
//   gap: 50px 40px;
// }
// @media (max-width: 480px) {
//   grid-template-columns: repeat(1, 1fr);
//   margin-top: 60px;
// }
// `;

export const GridForSS = styled.div`

display: flex;
margin:0;
place-items:center;
justify-content: center;
margin-top: 50px;
grid-template-columns: repeat(3, 1fr);
@media (max-width: 1280px) {
}
@media (max-width: 1024px) {
  margin-top: 60px;
}
@media (max-width: 991px) {
  grid-template-columns: repeat(1, 290px);
  justify-content: center;
}
@media (max-width: 480px) {
  grid-template-columns: repeat(1, 1fr);
  margin-top: 60px;
}
`;


export const Item = styled.div`
  text-align: center;
  box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8);
`;

export const ImageWrap = styled.span`
  margin: 5px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

// export const Item = styled.div`
//   text-align: center;
//   &:hover {
//     figure {
//       transform: rotate(20deg);
//     }
//   }
//   figure {
//     transition: transform .3s ease-out;
//     margin: 0 0 40px;
//     @media (min-width: 769px) and (max-width: 1024px) {
//       min-height: auto;
//       margin-bottom: 30px;
//     }
//     @media (max-width: 480px) {
//       margin-bottom: 20px;
//       min-height: auto;
//     }
//   }
//   img {
//     @media (max-width: 1024px) {
//       max-width: 70px;
//     }
//   }
//   h4 {
//     font-weight: bold;
//     font-size: 18px;
//     line-height: 25px;
//     @media (max-width: 1024px) {
//       font-size: 17px;
//     }
//     @media (max-width: 480px) {
//       font-size: 16px;
//       margin-bottom: 5px;
//     }
//   }
//   p {
//     color: ${themeGet('colors.textColor')};
//     font-size: 16px;
//     font-weight: 500;
//     line-height: 2;
//     @media (min-width: 769px) and (max-width: 1024px) {
//       font-size: 14px;
//       line-height: 1.9;
//     }
//     @media (max-width: 480px) {
//       font-size: 15px;
//     }
//   }
//   a {
//     color: ${themeGet('colors.linkColor')};
//     font-size: 15px;
//     font-weight: 700;
//     line-height: 20px;
//     letter-spacing: -0.1px;
//     @media (min-width: 769px) and (max-width: 1024px) {
//       font-size: 14px;
//     }
//     i {
//       line-height: 1;
//       transform: translateX(2px);
//       transition: 0.3s ease 0s;
//     }
//     &:hover i {
//       transform: translateX(5px);
//     }
//   }
// `;


export const Figure = styled.figure`
  margin: 60px 0 0;
  justify-content:center;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    margin-top: 35px;
  }
  img {
    margin: 0 auto;
  }
`;

export default Section;