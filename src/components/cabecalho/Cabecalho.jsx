import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { corPrimaria } from "../UI/Variaveis";

//No styled-components o componente criado, no exemplo a seguir StyledHeader, é criado para estilizar um elemento HTML de uma tag nav e nessa tag são adicionados os estilos css 
const StyledHeader = styled.nav` 
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${props => props.primary ? "white" : corPrimaria};
  color: ${props => props.primary ? corPrimaria : "white"};
`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com"> {/* primary é uma prop do componente BtnCabecalho que é passada para o estilo css do background e color */}
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">
          Sair
        </BtnCabecalho>
      </div> 
    </StyledHeader>
  );
};

export default Cabecalho;
