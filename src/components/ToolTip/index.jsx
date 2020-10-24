import React from "react";
import styled from "styled-components";

const ToolTip = ({ children, tooltiptext }) => (
  <TooltipContainer>
    {children}
    <ToolTipText className="tooltiptext">{tooltiptext}</ToolTipText>
  </TooltipContainer>
);

export default ToolTip;

const TooltipContainer = styled.div`
  :hover .tooltiptext {
    transition-delay: 0.5s;
    visibility: visible;
  }
`;

const ToolTipText = styled.span`
  font: 500 1rem Inter;
  visibility: hidden;
  min-width: 60px;
  max-width: 200px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  padding: 4px 8px;
  position: absolute;
  z-index: 999;
`;
