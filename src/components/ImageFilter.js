import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import {IconeTema} from '../components/UI/Ui.js';

export default (type) => {
    const Imagens = {
        Restaurante: <IconeTema src={alimentacao} alt='Restaurante' />,
        Utilidades: <IconeTema src={utilidades} alt='Utilidades' />,
        Saude: <IconeTema src={saude} alt='Saude' />,
        Transporte: <IconeTema src={transporte} alt='Transporte' />,
        default: <IconeTema src={outros} alt='outro' />,
    }

    return type in Imagens ? Imagens[type] : Imagens.default; //"type in Imagens" pesquisa se a propriedade type existe no objeto Imagens
}