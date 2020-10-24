import React from "react";
import styled from "styled-components";

const DefaultCard = ({ color, title, image, handleBox }) => (
  <CardContainer style={{ background: color }} onClick={() => handleBox(title)}>
    {/* <Title>{title}</Title> */}
    <Image src={image} />
  </CardContainer>
);

export default DefaultCard;

const CardContainer = styled.div`
  margin: 16px;
  position: relative;
  background: #3b3784;
  padding: 10px;
  /* padding-top: 4px; */
  border-radius: 2px;
  box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 1px 8px rgba(25, 25, 112, 0.3);
    transform: scale(1.04);
  }
`;
const Title = styled.h2`
  font: 700 2rem Inter;
  margin: 4px;
  color: #fff;
`;
const Image = styled.img`
  width: 700px;
  border-radius: 5px;
`;
