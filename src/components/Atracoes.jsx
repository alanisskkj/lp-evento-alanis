import { atracoes } from '../../data/evento'
import CartaoAtracao from './CartaoAtracao'

function Atracoes() {
  return (
    <section id="atracoes" className="py-16 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center sm:text-left">
          Conheça as Atrações
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {atracoes.map((atracao) => (
            <CartaoAtracao 
              key={atracao.nome}
              nome={atracao.nome}
              estilo={atracao.estilo}
              descricao={atracao.descricao}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Atracoes
