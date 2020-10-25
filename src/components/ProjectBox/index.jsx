import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Timeless,
  BookBook,
  UserRegistration,
  Lig4,
  PhotosFromHere,
  HanoiTower,
  Labyrint,
  Magic8Ball,
} from './projects-info';
import { motion, useAnimation } from 'framer-motion';

const ProjectBox = ({ handleCloseBox, project }) => {
  const controls = useAnimation();

  const scrollTop = () => {
    window.scrollTo({ top: project.position, behavior: 'smooth' });
  };

  controls.start({
    x: '-94%',
    backgroundColor: project.color,
    transition: { duration: 0.3 },
    type: 'spring',
    opacity: 1,
  });

  useEffect(() => {
    if (!project) {
      controls.start({
        opacity: 0,
        x: '100%',
        transition: { duration: 0.3 },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  const currentProject = () => {
    let currentProject;
    switch (project.title) {
      case 'Timeless':
        currentProject = () => <Timeless backTop={scrollTop} />;
        return <Timeless backTop={scrollTop} />;

      case 'BookBook':
        currentProject = () => <BookBook backTop={scrollTop} />;
        return <BookBook backTop={scrollTop} />;

      case 'User-Registration':
        currentProject = () => <UserRegistration backTop={scrollTop} />;
        return <UserRegistration backTop={scrollTop} />;

      case 'Lig4':
        currentProject = () => <Lig4 backTop={scrollTop} />;
        return <Lig4 backTop={scrollTop} />;

      case 'Photos from Here':
        currentProject = () => <PhotosFromHere backTop={scrollTop} />;
        return <PhotosFromHere backTop={scrollTop} />;

      case 'Torre de Hanoi':
        currentProject = () => <HanoiTower backTop={scrollTop} />;
        return <HanoiTower backTop={scrollTop} />;

      case 'Labyrint':
        currentProject = () => <Labyrint backTop={scrollTop} />;
        return <Labyrint backTop={scrollTop} />;

      case 'Magic 8 Ball':
        currentProject = () => <Magic8Ball backTop={scrollTop} />;
        return <Magic8Ball backTop={scrollTop} />;

      default:
        return currentProject;
    }
  };

  return (
    <ProjectContainer
      style={{ top: project.position ? project.position : '0' }}
      initial="pageInitial"
      animate={controls}
      variants={{
        pageInitial: {
          opacity: 0,
        },
      }}>
      {project && currentProject()}

      <Return onClick={() => handleCloseBox()}>
        <p>Voltar</p>
        <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
      </Return>
    </ProjectContainer>
  );
};

export default ProjectBox;

const ProjectContainer = styled(motion.div)`
  position: absolute;
  z-index: 99999;
  left: 100%;
  width: 100%;
  margin: 16px;
  background: #2a3990;
  padding: 40px 60px;
  border-radius: 6px;
  box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: 0.3s;
`;

const Return = styled.div`
  position: absolute;
  top: 20px;
  left: 84%;
  display: flex;
  align-items: center;
  transition: 0.2s;
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

  :hover {
    transform: scale(1.2);
  }
`;
