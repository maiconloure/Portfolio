import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ProjectsInfo } from './projects-info';
import { motion, useAnimation } from 'framer-motion';

const ProjectBox = ({ title, handleCloseBox, projectBox }) => {
  const currentProject = ProjectsInfo.filter((project) => project.title === title);
  const controls = useAnimation();
  console.log(projectBox);

  controls.start({
    x: '-94%',
    backgroundColor: '#0074d9',
    transition: { duration: 0.5 },
    type: 'spring',
    opacity: 1,
  });

  useEffect(() => {
    if (!projectBox) {
      controls.start({
        opacity: 0,
        x: '100%',
        transition: { delay: 0.3 },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectBox]);

  return (
    <ProjectContainer
      initial="pageInitial"
      animate={controls}
      variants={{
        pageInitial: {
          opacity: 0,
        },
      }}>
      {projectBox && (
        <>
          <Title>
            <h2>{currentProject[0].title}</h2>
          </Title>
          <SubTitle>
            <h3>{currentProject[0].slogan}</h3>
          </SubTitle>
          <Description>
            <p>{currentProject[0].description}</p>
          </Description>
          <ImagesTimeline>
            {currentProject[0].images.map((image, index) => (
              <img src={image} key={index} alt="Project" />
            ))}
          </ImagesTimeline>

          <Return onClick={() => handleCloseBox()}>
            <p>Voltar</p>
            <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
          </Return>
        </>
      )}
    </ProjectContainer>
  );
};

export default ProjectBox;

const ProjectContainer = styled(motion.div)`
  position: absolute;
  z-index: 999999;
  top: 0;
  left: 100%;
  width: 100%;
  min-height: 100%;
  margin: 16px;
  background: #2a3990;
  padding: 40px 60px;
  border-radius: 5px;
  box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: 0.3s;
`;

const Title = styled.div`
  h2 {
    font: 700 3rem Inter;
    color: #fff;
    margin: 4px;
  }
`;
const SubTitle = styled.div`
  h3 {
    font: 600 1.5rem Inter;
    color: #fff;
  }
`;
const Description = styled.div`
  width: 90%;
  p {
    font: 400 0.9rem Inter;
    color: #fff;
  }
`;

const ImagesTimeline = styled.div`
  img {
    width: 80%;
  }
`;

const Return = styled.div`
  position: absolute;
  top: 10px;
  left: 84%;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    font: 700 1.5rem Inter;
    font-style: italic;
    color: #fff;
    margin: 0 10px;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;
