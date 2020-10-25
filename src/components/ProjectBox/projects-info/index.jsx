import React from 'react';
import styled from 'styled-components';
import TimelessFrame1 from '../../../assets/timeless/landing.png';
import TimelessFrame3 from '../../../assets/timeless/frame3.png';
import TimelessFrame4 from '../../../assets/timeless/frame4.png';
import TimelessFrame5 from '../../../assets/timeless/frame5.png';
import TimelessFrame6 from '../../../assets/timeless/frame6.png';
import TimelessFrame7 from '../../../assets/timeless/frame7.png';
import TimelessFrame8 from '../../../assets/timeless/frame8.png';
import TimelessFrame9 from '../../../assets/timeless/frame9.png';
import TimelessFrame10 from '../../../assets/timeless/frame10.png';
import TimelessFrame11 from '../../../assets/timeless/frame11.png';
import TimelessFrame12 from '../../../assets/timeless/frame12.png';
import TimelessFrame13 from '../../../assets/timeless/frame13.png';

import BookBookFrame1 from '../../../assets/bookbook/bookbook.png';
import BookBookFrame2 from '../../../assets/bookbook/frame2.png';
import BookBookFrame3 from '../../../assets/bookbook/frame3.png';
import BookBookFrame4 from '../../../assets/bookbook/frame4.png';
import BookBookFrame5 from '../../../assets/bookbook/frame5.png';
import BookBookFrame6 from '../../../assets/bookbook/frame6.png';
import BookBookFrame7 from '../../../assets/bookbook/frame7.png';
import BookBookFrame8 from '../../../assets/bookbook/frame8.png';
import BookBookFrame9 from '../../../assets/bookbook/frame9.png';

import hidanGif from '../../../assets/hidan.gif';

export const Timeless = ({ backTop }) => (
  <>
    <Title>
      <h2>Timeless</h2>
      <p> / </p>
      <a href="https://timelessbr.com/"> timelessbr.com</a>
    </Title>
    <SubTitle>
      <h3>
        Aplicação para gestão de tempo e organização do trabalho ajustadas e personalizadas ao
        usuário alvo.
      </h3>
    </SubTitle>
    <Description>
      <p>
        Projeto que visava simular a criação de uma startup do zero, desde o pit de apresentação
        para o time de ensino e todos os meus colegas de curso, e a partir das ideias apresentadas,
        foi escolhido a minha ideia de aplicação a vencedora, assim, se iniciou a criação do
        protótipo do MVP no Figma, e em seguida o planejamento das sprints(3 semanas), utilizando a
        metodologia ágil scrum, com o Trello. A organização e versionamento do código foi realizado
        com Git e o Gitlab. Além da idealização do projeto, assumi o cargo de Tech Leader, onde
        coordenei a equipe e as tecnologias empregadas no projeto. A aplicação foi desenvolvida em
        React com o gerenciamento de pacotes yarn, utilizamos somente Typescript para a lógica da
        aplicação, com containers, e componentes stateless, todos com testes unitários e/ou de
        integração e um teste end-to-end com Cypress; Arquitetura Redux para de fluxo dos
        estados,gerenciamento de rotas com react-router, e Webpack para o gerenciamento e
        empacotamento de arquivos. Toda a estilização foi desenvolvida com Styled-components tipado.
        Para as requisições utilizamos axios, e nosso servidor foi construído com JSON Server e
        hospedado no Heroku. Também construímos nossa própria biblioteca de componentes, que está
        presente em toda a aplicação. Para mim foi um excelente projeto desafiador que desenvolveu
        tanto minhas soft skills quanto minhas hard skills, foi ótimo trabalhar em equipe,
        desenvolver novas tecnologias, aprender coisas novas todos os dias, e me tornando um
        desenvolvedor melhor a cada sprint concluída, estou muito orgulhoso do meu time e de nossa
        aplicação, com certeza superei minhas próprias habilidades, e agora é buscar desafios ainda
        maiores! sempre buscando melhorar.
      </p>
      <p>
        Todos trabalhavam como desenvolvedor além de sua posição designada, meus trabalhos no
        projeto foram: <br />
        <strong>Prototipo: </strong>
        Quase toda parte de estilização foi elaborada por mim no Figma.
        <br />
        <strong>Landing Page: </strong>
        Toda lógica com a autenticação e validações(Login/Cadastro), estilização responsiva com
        alguns componentes da nossa biblioteca tambêm desenvolvidos por mim;
        <br />
        <strong>Board principal: </strong>
        Barra superior completa, menu do usuário, feed de notificações, edição dos cards, side menu
        de personalização, informativos e dicas para o usuário, funcionalidade criar card rápido,
        conexão de cards, excluir cartão, seguir cartão, bloquear cartão, fazer check-in, botão de
        feedback,
      </p>
      <a href="https://gitlab.com/capstoneproject-group-4/timeless">Repositório oficial</a>
      <a href="https://gitlab.com/capstoneproject-group-4/capstone-components">
        Biblioteca de Componentes
      </a>
      <a href="https://www.figma.com/file/nHg2BM9r9sWFu6EvbgIbZd/Timeless-Project?node-id=0%3A1">
        Protótipo no Figma
      </a>
      <a href="https://docs.google.com/presentation/d/1SBAfnKagPXV9DCW_SJLCKOXh6Hdv6pRME82xf8XJtxY/edit?usp=sharing">
        Apresentação do projeto
      </a>
      <h3>Equipe</h3>
      <p>
        Eu, Maicon Lourenço(Tech Leader), Christopher William(Product Owner), Leandro Koller(QA
        Tester), Rafael Barlera(Scrum Master)
      </p>
    </Description>
    <ImagesTimeline>
      <img src={TimelessFrame1} alt="project-screenshot" />
      <img src={TimelessFrame3} alt="project-screenshot" />
      <img src={TimelessFrame4} alt="project-screenshot" />
      <img src={TimelessFrame5} alt="project-screenshot" />
      <img src={TimelessFrame6} alt="project-screenshot" />
      <img src={TimelessFrame7} alt="project-screenshot" />
      <img src={TimelessFrame8} alt="project-screenshot" />
      <img src={TimelessFrame9} alt="project-screenshot" />
      <img src={TimelessFrame10} alt="project-screenshot" />
      <img src={TimelessFrame11} alt="project-screenshot" />
      <img src={TimelessFrame12} alt="project-screenshot" />
      <img src={TimelessFrame13} alt="project-screenshot" />
    </ImagesTimeline>
    <Back onClick={() => backTop()}>
      <p>Voltar ao Topo </p>
      <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
    </Back>
  </>
);

export const BookBook = ({ backTop }) => (
  <>
    <Title>
      <h2>BookBook</h2>
      <p> / </p>
      <a href="https://bookbook-project-one.vercel.app/"> bookbook.com</a>
    </Title>
    <SubTitle>
      <h3>
        Uma rede social para leitores compartilharem suas opiniões e desejos sobre diversos livros.
        <br />
        Explorar novos livros, ver os mais comentados, e o de seus amigos!
        <br />
        Um chat aberto integrado para os leitores baterem um papo descontraído!
      </h3>
    </SubTitle>
    <Description>
      <p>
        O Objetivo principal do projeto era a elaboração de uma rede social focada em leitores,
        começamos com um brainstorm no figma, onde todos deram suas ideias de layout, e partimos
        para a organização das duas sprints divididas em 2 semanas, utilizamos trello para gerenciar
        o product backlog, e git e Gitlab para versionamento; Fiquei na posição de Scrum Master,
        utilizamos a metodologia ágil Scrum, e um dos meus trabalhos foi manter o time conectado ao
        nosso scrum board no trello, mantendo sempre atualizado e entregando features
        constantemente, tambêm fiquei responsável pelas dailys todos os dias ás 9:00 da manhã, e
        pelas Retro; Todos no time além de sua posição, atuavam como Desenvolvedor, meu trabalho no
        projeto, foi de criação da Landing Page completa, desde a lógica até a estilização, a pagina
        principal da aplicação o Explorar, juntamente com outro dev, tambêm fiz a estilização das
        nossas páginas de chat;
      </p>
      <a href="https://gitlab.com/maiconlourenco/projeto-bookbook">Repositório oficial</a>
      <h3>Equipe</h3>
      <p>
        Eu, Maicon Lourenço(Scrum Master), Christopher William(Product Owner), Ricardo Santis(QA
        Tester), Luis Cazuriaga(Tech Leader)
      </p>
    </Description>
    <ImagesTimeline>
      <img src={BookBookFrame1} alt="project-screenshot" />
      <img src={BookBookFrame2} alt="project-screenshot" />
      <img src={BookBookFrame3} alt="project-screenshot" />
      <img src={BookBookFrame4} alt="project-screenshot" />
      <img src={BookBookFrame5} alt="project-screenshot" />
      <img src={BookBookFrame6} alt="project-screenshot" />
      <img src={BookBookFrame7} alt="project-screenshot" />
      <img src={BookBookFrame8} alt="project-screenshot" />
      <img src={BookBookFrame9} alt="project-screenshot" />
    </ImagesTimeline>
    <Back onClick={() => backTop()}>
      <p>Voltar ao Topo </p>
      <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
    </Back>
  </>
);

export const Lig4 = ({ backTop }) => (
  <>
    <Alert>
      <AlertImg>
        <img src={hidanGif} alt="" />
      </AlertImg>
      <p>Oquê? está pagina ainda está em desenvolvimento!</p>
    </Alert>
    {/* <Back onClick={() => backTop()}>
      <p>Voltar ao Topo </p>
      <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
    </Back> */}
  </>
);

export const PhotosFromHere = ({ backTop }) => (
  <>
    <Alert>
      <AlertImg>
        <img src={hidanGif} alt="" />
      </AlertImg>
      <p>Oquê? está pagina ainda está em desenvolvimento!</p>
    </Alert>

    {/* <Back onClick={() => backTop()}>
      <p>Voltar ao Topo </p>
      <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
    </Back> */}
  </>
);

export const UserRegistration = ({ backTop }) => (
  <>
    <Alert>
      <AlertImg>
        <img src={hidanGif} alt="" />
      </AlertImg>
      <p>Oquê? está pagina ainda está em desenvolvimento!</p>
    </Alert>
    {/* <Back onClick={() => backTop()}>
      <p>Voltar ao Topo </p>
      <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
    </Back> */}
  </>
);

export const HanoiTower = ({ backTop }) => (
  <>
    <Alert>
      <AlertImg>
        <img src={hidanGif} alt="" />
      </AlertImg>
      <p>Oquê? está pagina ainda está em desenvolvimento!</p>
    </Alert>
    {/* <Back onClick={() => backTop()}>
      <p>Voltar ao Topo </p>
      <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
    </Back> */}
  </>
);

export const Labyrint = ({ backTop }) => (
  <>
    <Alert>
      <AlertImg>
        <img src={hidanGif} alt="" />
      </AlertImg>
      <p>Oquê? está pagina ainda está em desenvolvimento!</p>
    </Alert>
    {/* <Back onClick={() => backTop()}>
      <p>Voltar ao Topo </p>
      <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
    </Back> */}
  </>
);

export const Magic8Ball = ({ backTop }) => (
  <>
    <Alert>
      <AlertImg>
        <img src={hidanGif} alt="" />
      </AlertImg>
      <p>Oquê? está pagina ainda está em desenvolvimento!</p>
    </Alert>
    {/* <Back onClick={() => backTop()}>
      <p>Voltar ao Topo </p>
      <img src="https://img.icons8.com/fluent/48/000000/right.png" alt="voltar" />
    </Back> */}
  </>
);

const Title = styled.div`
  display: flex;
  align-items: center;

  h2 {
    display: inline;
    font: 700 3rem Inter;
    color: #fff;
    margin: 4px;
  }
  p {
    font: 800 2rem Inter;
    color: #fff;
    margin: 0 4px;
  }
  a {
    display: inline;
    font: 600 1.1rem Inter;
    color: #fff;
    margin-right: 20px;

    :hover {
      color: #000;
    }
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

  a {
    font: 600 1rem Inter;
    color: #fff;
    margin-right: 20px;

    :hover {
      color: #000;
    }
  }

  h3 {
    font: 600 1rem Inter;
    color: #fff;
  }
`;

const ImagesTimeline = styled.div`
  margin-top: 10px;
  padding: 10px;
  img {
    width: 80%;
    border-radius: 5px;
    margin: 6px 0;
  }
`;

const Back = styled.div`
  position: absolute;
  top: 99%;
  left: 80%;
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
    transform: rotate(-90deg);
    width: 40px;
    height: 40px;
  }

  :hover {
    transform: scale(1.2);
  }
`;

const AlertImg = styled.div`
  img {
    width: 450px;
    border-radius: 10px;
  }
`;

const Alert = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font: 600 2rem Inter;
    color: #fff;
  }
`;
