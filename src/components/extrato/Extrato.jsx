import { extratoLista } from "../../info";
import Itens from "../itens/Itens";
import { Box, Btn } from "../UI/Ui";

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({id, type, value, date, from}) => {
                return (
                    <Itens key={id} type={type} value={value} date={date} from={from}/>
                )
            })}
            <Btn>Ver mais</Btn>
        </Box>
    )
}
export default Extrato;