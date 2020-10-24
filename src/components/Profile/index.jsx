import React from "react";
import styled from "styled-components";
import photo from "../../assets/photo.png";

const ProfileBox = () => {
  return (
    <ProfileContainer>
      <Image src="https://avatars3.githubusercontent.com/u/59097467?s=460&u=f8ceaa740a7c8d29c510f150118d3f044e3c2351&v=4" />
      <Info>
        <h1>Maicon Lourenço</h1>
        <p>Front-End Developer</p>
        <Line />

        <Box1>
          <img
            src="https://img.icons8.com/fluent/48/000000/company.png"
            alt="course company"
          />
          Kenzie Academy
        </Box1>
        <Box1>
          <img
            src="https://img.icons8.com/color/48/000000/worldwide-location.png"
            alt="location"
          />
          Santa Catarina, Brazil
        </Box1>
        <Box1>
          <a href="https://www.github.com/maiconloure/">
            <img
              src="https://img.icons8.com/fluent/48/000000/gmail.png"
              alt="gmail"
            />
            maiconloure@gmail.com
          </a>
        </Box1>
        <Box1>
          <a href="https://www.github.com/maiconloure/">
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="github"
            />
            github.com/maiconloure
          </a>
        </Box1>
        <Box1>
          <a href="https://www.linkedin.com/in/maiconlourenco/">
            <img
              src="https://img.icons8.com/color/48/000000/gitlab.png"
              alt="gitlab"
            />
            gitlab.com/maiconlourenco
          </a>
        </Box1>
        <Box1>
          <a href="https://www.linkedin.com/in/maiconlourenco/">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="linkedin"
            />
            linkedin.com/in/maiconlourenco/
          </a>
        </Box1>

        <Curriculum>
          <a
            href="https://drive.google.com/file/d/1_lliNJpcBYb64pIBoJNUEql5pgsOrFro/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/pdf.png"
              alt="pdf-curriculum"
            />
            <div className="tooltiptext">Visualizar currículo completo</div>
          </a>
        </Curriculum>
      </Info>
    </ProfileContainer>
  );
};

export default ProfileBox;

const ProfileContainer = styled.div`
  margin: 10px;
  position: relative;
  background: #3b3784;
  padding: 16px;
  border-radius: 4px;
  width: 260px;
  min-height: 490px;
  box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  :hover {
    box-shadow: 0 0 1px 8px rgba(25, 25, 112, 0.3);
    transform: scale(1.04);
  }
`;

const Image = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  color: #fff;
  h1 {
    font: 700 1.8rem Inter;
    margin: 0;
  }
  p {
    font: 500 1.2rem Inter;
    margin: 0;
  }
`;

const Line = styled.div`
  border-bottom: 3px solid #fff;
  width: 194px;
  margin: 5px 0;
`;

const Box1 = styled.div`
  display: flex;
  align-items: center;
  font: 500 1rem Inter;

  img {
    width: 24px;
    margin-right: 4px;
  }

  a {
    font: 400 0.9rem Inter;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;

    :hover {
      color: #000;
    }
  }
`;

const Curriculum = styled.div`
  position: absolute;
  top: 230px;
  left: 240px;
  .tooltiptext {
    font: 500 1rem Inter;
    visibility: hidden;
    width: 150px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 4px 6px;
    position: absolute;
    z-index: 999;
  }

  :hover {
    .tooltiptext {
      transition-delay: 0.3s;
      visibility: visible;
    }
  }

  img {
    width: 55px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }
`;
