import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin-top: 100px;
`;

export const Banner = styled.div`
  width: 90vw;
  border-radius: 10px;
  background-color: purple;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  height: 400px;
  padding: 50px;
  background-image: linear-gradient(to right, #766cad, #d6c4e9);
`;

export const Left = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const Right = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: end;
`;

export const BannerTitle = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 40px;
`;

export const Bottom = styled.div`
  width: 75vw;
  margin: 0px auto;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const BottomTitle = styled.h1`
  color: #766cad;
`;

export const BottomContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const BottomSubTitle = styled.h2`
  color: #766cad;
`;

export const BottomText = styled.p``;