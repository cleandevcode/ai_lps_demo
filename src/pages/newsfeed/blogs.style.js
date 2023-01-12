import styled from "styled-components";

const Section = styled.div`
  margin: 200px;
  @media (max-width: 1024px) {
    margin: 100px;
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin: 70px;
    margin-top: 200px;
  }
`;

export const ImageWrap = styled.span`
  margin: 32px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export default Section;
