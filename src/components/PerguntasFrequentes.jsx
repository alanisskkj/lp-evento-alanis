import { useState } from 'react'

const perguntas = [
  {
    id: 'data-local',
    pergunta: 'Quando e onde acontece o festival?',
    resposta: 'Nos dias 13 e 14 de março de 2027, das 16h às 23h, no Parque das Águas, em Osvaldo Cruz.',
  },
  {
    id: 'ingressos',
    pergunta: 'Como funcionam os ingressos solidários?',
    resposta: 'A renda dos ingressos solidários será destinada ao projeto de música da escola municipal. Valores e forma de retirada ainda não foram informados.',
  },
  {
    id: 'atividades',
    pergunta: 'O que acontece além dos shows?',
    resposta: 'A programação também inclui feira de artesanato, food trucks e oficinas gratuitas, como a oficina de percussão.',
  },
  {
    id: 'bandas',
    pergunta: 'Quais artistas vão se apresentar?',
    resposta: 'Entre as atrações estão Vento Norte, Maré Mansa, Los Ipês e o Coral Jovem OC. Consulte a programação para conferir os horários.',
  },
]

function PerguntasFrequentes() {
  const [perguntaAberta, setPerguntaAberta] = useState(null)

  function alternarPergunta(id) {
    setPerguntaAberta((atual) => atual === id ? null : id)
  }

  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 id="duvidas-titulo" className="mb-6 text-3xl font-extrabold text-gray-900">
          Perguntas frequentes
        </h2>
        <div className="divide-y divide-gray-300">
          {perguntas.map(({ id, pergunta, resposta }) => {
            const aberta = perguntaAberta === id
            const respostaId = `resposta-${id}`

            return (
              <article key={id} className="py-4">
                <h3 className="text-lg font-bold text-gray-900">
                  <button
                    type="button"
                    aria-expanded={aberta}
                    aria-controls={respostaId}
                    onClick={() => alternarPergunta(id)}
                    className="w-full text-left"
                  >
                    {pergunta}
                  </button>
                </h3>
                <div id={respostaId} hidden={!aberta} className="pt-3 text-gray-700">
                  <p>{resposta}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PerguntasFrequentes