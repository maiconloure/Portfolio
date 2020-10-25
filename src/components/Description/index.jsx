import React from 'react';
import styled from 'styled-components';

const Description = () => (
  <DescriptionContainer>
    <InnerBox>
      <p>
        Olá, Sou um grande entusiasta do conhecimento e tecnologia, tenho mais de 6 anos de estudos
        em áreas da tecnologia, comecei como Design, Web Design e realizei alguns trabalhos como
        Freelancer, após alguns anos, decidi seguir para a área da computação gráfica, onde obtive
        excelentes experiências, e realizei diversos trabalhos que hoje estão em meu portfólio.
        Autodidata, Disciplinado e organizado, sempre me dedicando ao máximo, entregando o meu
        melhor. Comecei a estudar programação em 2018, onde iniciei os estudos com Python e
        Javascript por quase 2 anos, quando decidi entrar com tudo no mundo da programação, e acabei
        conhecendo a Kenzie Academy Brasil. Hoje curso desenvolvimento Full Stack, onde trabalho com
        as tecnologias e práticas mais atuais do mercado, HTML5, CSS3, Javascript, Typescript,
        ReactJs, Redux, testes unitários, integração, end-to-end, git, Python, banco de dados, e
        etc. Coloco tudo isso em prática, em incríveis trabalhos em equipe, que desenvolvem muito
        minhas soft skills e hard skills, tenho grande habilidade tanto em front-end quanto em
        back-end em meus trabalhos, código sempre limpo, e aplicando teste sempre que recomendável.
        <br />
        Minhas áreas de interesse atualmente são: Desenvolvimento nativo, Bancos de
        dados(especialmete não relacional), Inteligência Artificial, Machine Learning e Data
        Science.
      </p>
    </InnerBox>
  </DescriptionContainer>
);

export default Description;

const DescriptionContainer = styled.div`
  background: #3b3784;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  max-width: 700px;
  min-height: 100px;
  max-height: 400px;
  transition: 0.2s;

  :hover {
    box-shadow: 0 0 1px 8px rgba(25, 25, 112, 0.3);
    transform: scale(1.04);
  }
`;

const InnerBox = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* width: 97%; */

  p {
    margin: 0;
    font: 400 0.9rem Inter;
    /* text-align: center; */
  }
`;
