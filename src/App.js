import Cabecalho from './components/cabecalho/Cabecalho';
import Container from './components/container/Container';
import { GlobalStyle } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components'; //a mudança do tema claro ou escuro é feito com ThemeProvider de styled-components 
import { temaClaro, temaEscuro } from './components/UI/Temas';
import { BtnTema } from './components/UI/Ui';
import SwitcherTema from './components/switcherTema/SwitcherTema';
import { useState } from 'react';

function App() {

  const [tema, setTema] = useState(true);

  return (
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}> 
        <GlobalStyle/> {/* estilos globais css. Todos os componentes aqui renderizados herdarão o estilo css de GlobalStyle */}
        <BtnTema onClick={() => setTema(!tema)}>
          <SwitcherTema tema={tema}/>
        </BtnTema>
        <Cabecalho/>
        <Container />
      </ThemeProvider>
  );
}

export default App;

/* 
O componente ThemeProvider é usado para fornecer um tema para todos os componentes filhos dentro dele. 
Neste caso, ele está sendo passado o objeto temaEscuro como propriedade theme, que é usado para definir o 
tema padrão para todos os componentes filhos. Os componentes filhos, como GlobalStyle, Cabecalho e Container,
irão receber esses estilos de tema e podem ser estilizados de acordo com esse tema.
*/