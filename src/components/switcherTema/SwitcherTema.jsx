import { Icone } from "../UI/Ui";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";

const claro = <Icone src={ThemeOn} alt="Tema claro"/>;
const escuro = <Icone src={ThemeOff} alt="Tema escuro"/>;

export default ({tema}) => {
    return tema ? escuro : claro;
}