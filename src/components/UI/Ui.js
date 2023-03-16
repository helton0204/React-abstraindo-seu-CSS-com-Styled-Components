import styled from "styled-components";

export const Icone = styled.img`
    height: 25px;
    width: 25px;
`;

//A propriedade CSS "filter: invert(100%)" inverte as cores de uma imagem ou elemento HTML. A porcentagem de inversão pode ser ajustada de 0% a 100%, onde 0% significa sem inversão e 100% significa uma inversão total das cores.
export const IconeTema = styled(Icone)` //observe que esse componente IconeMargin está herdando um outro componente "Icone" e adiocionando mais um estilo css
    filter: ${({theme}) => theme.filter}; 
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({theme}) => theme.inside};
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
    padding: 20px;
    width: 48%;
    
    @media (max-width: 800px) {
        width: 95%;
        margin: 5px;
    }
`;

export const Btn = styled.button`
    margin: 15px auto 0px auto;
    display: block;
    border-radius: 20px;
    background-color: #41d3be;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 20px;
    cursor: pointer;
`; 

export const BtnTema = styled.button`
    position: absolute;
    top: 4vh;
    right: 20px;
    background-color: inherit; //inherit" é uma propriedade CSS que indica que o elemento em questão herdará a cor de fundo definida em seu ancestral mais próximo. Isso significa que, se não houver nenhuma cor de fundo definida para o elemento em questão, ele pegará a cor de fundo do elemento pai mais próximo que tenha uma cor definida.
    border: none;
    cursor: pointer;
`;

export const Detalhe = styled.span`
    color: #41d3be;
    font-size: 24px;
`;

export const Saldo = styled.div`
    font-weight: 700;
    font-size: 32px;
`;