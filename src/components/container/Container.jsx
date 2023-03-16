import React from "react";
import Titulo from "../titulo/Titulo";
import Conta from "../conta/Conta";
import styled from "styled-components";
import Extrato from "../extrato/Extrato";

/*
 O background-color desse componente Container está sendo definido dinamicamente através dessa destructuring 
 function, com base no tema fornecido pelo ThemeProvider pai. O tema é acessado através da propriedade theme 
 que é passada ao componente como um argumento. Desta forma, a cor de fundo pode ser alterada de acordo com 
 o tema escolhido.
 */

const Container = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  ); 
};
