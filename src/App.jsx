import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileBox from './components/Profile';
import Skills from './components/Skills';
import Description from './components/Description';
import DefaultCard from './components/DefaultCard';
import TimelessFrame from './assets/image.png';
import BookBookImage from './assets/bookbook.png';
import lig4Image from './assets/lig4.png';
import UserRegistration from './assets/user-registration.png';
import photos from './assets/photos.png';
import magicball from './assets/magicball.png';
import hanoi from './assets/hanoi.png';
import labyrint from './assets/labyrint.png';
import ProjectBox from './components/ProjectBox';

const App = () => {
  const [projectBox, setProjectBox] = useState(false);

  const handleBox = (project) => {
    setProjectBox(project);
  };

  const handleCloseBox = () => {
    setProjectBox(false);
  };

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
          <DefaultCard title="Photos from Here" image={photos} handleBox={handleBox} />
          <DefaultCard title="Magic 8 Ball" image={magicball} handleBox={handleBox} />
          <DefaultCard title="Torre de Hanoi" image={hanoi} handleBox={handleBox} />
        </ColumnOne>
        <ColumnTwo>
          <Skills />
          <Description />
          <DefaultCard title="Timeless" image={TimelessFrame} handleBox={handleBox} />
          <DefaultCard title="Lig-4" image={lig4Image} handleBox={handleBox} />

          <DefaultCard title="User-Registration" image={UserRegistration} handleBox={handleBox} />
          <DefaultCard title="Labyrint" image={labyrint} handleBox={handleBox} />
        </ColumnTwo>

        <ProjectBox title={projectBox} handleCloseBox={handleCloseBox} projectBox={projectBox} />
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
  overflow: hidden;
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
