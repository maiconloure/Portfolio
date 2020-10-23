import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <SkillsContainer>
      <Title>Skills</Title>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  grid-area: skillsBox;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  min-width: 350px;
  min-height: 200px;
  box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font: 700 1.8rem Inter;
  margin: 0;
`;
