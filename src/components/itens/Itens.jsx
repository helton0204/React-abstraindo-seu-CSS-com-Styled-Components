import styled from "styled-components";
import ImageFilter from "../ImageFilter";
import Item from "../item/Item";

const Itens = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`;

export default ({type, value, date, from}) => {
    return(
        <Itens> {/*esse componente Itens se refere a constante Itens acima  */}
            {ImageFilter(type)}
            <Item type={type} from={from} value={value}/>
            <span>{date}</span>
        </Itens>    
    )
}


