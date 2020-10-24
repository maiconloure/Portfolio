import React from "react";
import styled from "styled-components";

const Description = () => (
  <DescriptionContainer>
    <InnerBox>
      <p>
        Possuo mais de 6 anos de estudo em áreas da tecnologia, comecei com
        design, web design e realizei alguns trabalhos como freelancer, após
        isso segui para a área da computação gráfica, onde obtive grandes
        experiências, e realizei grandes trabalhos que hoje estão no meu
        portfólio. Autodidata, disciplinado e organizado, sempre me dedicando ao
        máximo, entregando o meu melhor. Comecei a estudar programação em meados
        de 2018, quando decidi mudar de carreira, inciei os estudos com Python,
        Javascript e MySQL por quase 2 anos até conhecer a Kenzie Academy. Hoje
        curso desenvolvimento Full Stack, onde trabalho com as tecnologias e
        práticas mais atuais do mercado, HTML5, CSS3, Javascript, Typescript,
        ReactJs, Redux, e testes unitários. Coloco tudo isso em prática, em
        incríveis trabalhos em equipe, que desenvolvem muito minhas softskills e
        hardskills, tenho grande habilidade em front-end e back-end em meus
        trabalhos.
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
