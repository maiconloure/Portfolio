import React from 'react';
import styled from 'styled-components';
import ToolTip from '../ToolTip';

import html5 from '../../assets/icons/html5.png';
import css from '../../assets/icons/css3.png';
import javascript from '../../assets/icons/javascript.png';
import typescript from '../../assets/icons/typescript.png';
import jest from '../../assets/icons/jest.png';
import webpack from '../../assets/icons/webpack.png';
import react from '../../assets/icons/react.png';
import redux from '../../assets/icons/redux.png';
import node from '../../assets/icons/node.png';
import python from '../../assets/icons/python.png';
import git from '../../assets/icons/git.png';

const Skills = () => (
  <SkillsContainer>
    <Title>Tecnologias</Title>
    <InnerBox>
      <ToolTip tooltiptext="HTML5">
        <Icon src={html5} alt="HTML5 Logo" />
      </ToolTip>
      <ToolTip tooltiptext="CSS3">
        <Icon src={css} alt="CSS3 Logo" />
      </ToolTip>
      <ToolTip tooltiptext="Javascript">
        <Icon src={javascript} alt="Javascript Logo" />
      </ToolTip>
      <ToolTip tooltiptext="Typescript">
        <Icon src={typescript} alt="Typescript Logo" />
      </ToolTip>
      <ToolTip tooltiptext="React">
        <Icon src={react} alt="React Logo" />
      </ToolTip>
      <ToolTip tooltiptext="Redux">
        <Icon src={redux} alt="Redux Logo" style={{ width: '50px' }} />
      </ToolTip>
      <ToolTip tooltiptext="Jest">
        <Icon src={jest} alt="Jest Logo" />
      </ToolTip>
      <ToolTip tooltiptext="Node">
        <Icon src={node} alt="Node Logo" />
      </ToolTip>
      <ToolTip tooltiptext="Webpack">
        <Icon src={webpack} alt="Webpack Logo" />
      </ToolTip>
      <ToolTip tooltiptext="Python">
        <Icon src={python} alt="Python Logo" />
      </ToolTip>
      <ToolTip tooltiptext="Git">
        <Icon src={git} alt="Git Logo" />
      </ToolTip>
    </InnerBox>
  </SkillsContainer>
);

export default Skills;

const SkillsContainer = styled.div`
  background: #3b3784;
  margin: 10px;
  padding: 10px;
  padding-top: 5px;
  border-radius: 4px;
  box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  max-width: 700px;
  min-height: 100px;
  max-height: 400px;
  transition: 0.3s;

  :hover {
    box-shadow: 0 0 1px 8px rgba(25, 25, 112, 0.3);
    transform: scale(1.04);
  }
`;

const Title = styled.h2`
  font: 800 1.2rem Inter;
  text-transform: uppercase;
  color: #fff;
  margin: 2px 0;
  align-self: flex-start;
`;

const InnerBox = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const Icon = styled.img`
  margin: 5px 10px;
  width: 40px;
`;
