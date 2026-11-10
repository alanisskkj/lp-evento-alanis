import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import Newsletter from './components/Inscricao'
import PerguntasFrequentes from './components/PerguntasFrequentes'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Cabecalho />
      <main id="conteudo" tabIndex="-1">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <PerguntasFrequentes />
        <Newsletter />
      </main>
      <Rodape />
    </>
  )
}
export default App