import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileBox from './components/Profile';
import Skills from './components/Skills';
import Description from './components/Description';
import DefaultCard from './components/DefaultCard';
import TimelessFrame from './assets/timeless/landing.png';
import BookBookImage from './assets/bookbook/bookbook.png';
import lig4Image from './assets/lig4/lig4.png';
import UserRegistration from './assets/user-registration/user-registration.png';
import photos from './assets/photos.png';
import magicball from './assets/magicball.png';
import hanoi from './assets/hanoi/hanoi.png';
import labyrint from './assets/labyrint.png';
import ProjectBox from './components/ProjectBox';

const App = () => {
  const [project, setProject] = useState(false);

  const handleBox = (evt, project, color) => {
    setProject({
      title: project,
      position: evt.currentTarget.offsetTop,
      color: color,
    });
  };

  const handleCloseBox = () => {
    setProject(false);
  };

  console.log(project.position);

  return (
    <AppContainer>
      <PortfolioContainer>
        <ColumnOne>
          <ProfileBox />
          <DefaultCard
            color="#8B4513"
            title="BookBook"
            image={BookBookImage}
            handleBox={handleBox}
          />
          <DefaultCard color="#483D8B" title="Lig4" image={lig4Image} handleBox={handleBox} />
          <DefaultCard color="#4169E1" title="Torre de Hanoi" image={hanoi} handleBox={handleBox} />
          <DefaultCard
            color="#020E36"
            title="Magic 8 Ball"
            image={magicball}
            handleBox={handleBox}
          />
        </ColumnOne>
        <ColumnTwo>
          <Skills />
          <Description />
          <DefaultCard
            color="#2a3990"
            title="Timeless"
            image={TimelessFrame}
            handleBox={handleBox}
          />
          <DefaultCard
            color="#080877"
            title="User-Registration"
            image={UserRegistration}
            handleBox={handleBox}
          />
          <DefaultCard
            color="#00008B"
            title="Photos from Here"
            image={photos}
            handleBox={handleBox}
          />

          <DefaultCard color="#276040" title="Labyrint" image={labyrint} handleBox={handleBox} />
        </ColumnTwo>
        {project && <ProjectBox project={project} handleCloseBox={handleCloseBox} />}
      </PortfolioContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  background: #17132a;
  padding: 20px;
  margin-left: 140px;
`;

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: stretch;
  position: relative;
  z-index: 1;
`;

const ColumnOne = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  align-content: stretch;
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
`;
