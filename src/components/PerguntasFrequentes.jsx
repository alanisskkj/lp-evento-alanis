import { useState } from 'react';

const perguntas = [
  {
    id: 'data-local',
    pergunta: 'Quando e onde acontece o festival?',
    resposta:
      'Nos dias 12, 13 e 14 de março de 2027, das 16h às 23h30, no Parque das Águas, em Osvaldo Cruz (SP).',
  },
  {
    id: 'ingressos',
    pergunta: 'Como funcionam os ingressos solidários?',
    resposta:
      'A renda dos ingressos solidários é destinada ao projeto de música da rede municipal de ensino. Neste ambiente de demonstração, os valores e compras são simulados.',
  },
  {
    id: 'atividades',
    pergunta: 'O que acontece além dos shows principais?',
    resposta:
      'A programação inclui feira de artesanato regional, cozinha caipira contemporânea e oficinas gratuitas de percussão e luthieria popular.',
  },
  {
    id: 'setores',
    pergunta: 'Qual a diferença entre Pista, VIP e Open Bar?',
    resposta:
      'Todos garantem acesso aos Palcos Terra e Mata. O setor VIP acrescenta área coberta elevada e banheiros exclusivos; o Open Bar inclui chope artesanal, água e sucos durante todo o evento.',
  },
];

function PerguntasFrequentes() {
  const [perguntaAberta, setPerguntaAberta] = useState(null);

  function alternarPergunta(id) {
    setPerguntaAberta((atual) => (atual === id ? null : id));
  }

  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-titulo"
      className="border-b border-borda-clara bg-papel px-4 py-16 text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite sm:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota-label-dark">
          Informações Úteis
        </p>
        <h2
          id="duvidas-titulo"
          className="font-display mt-2 mb-8 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl"
        >
          Perguntas Frequentes
        </h2>

        <div className="divide-y divide-borda-clara border border-borda-clara dark:divide-borda-escura dark:border-borda-escura">
          {perguntas.map(({ id, pergunta, resposta }) => {
            const aberta = perguntaAberta === id;
            const respostaId = `resposta-${id}`;

            return (
              <article key={id} className="bg-papel dark:bg-carvao">
                <h3 className="font-sans text-base font-bold sm:text-lg">
                  <button
                    type="button"
                    aria-expanded={aberta}
                    aria-controls={respostaId}
                    onClick={() => alternarPergunta(id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-areia dark:hover:bg-chumbo"
                  >
                    <span>{pergunta}</span>
                    <span
                      aria-hidden="true"
                      className="font-display text-xl font-extrabold text-terracota-escuro dark:text-terracota-label-dark"
                    >
                      {aberta ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={respostaId}
                  hidden={!aberta}
                  className="border-t border-borda-clara bg-areia/60 px-5 py-4 text-sm leading-relaxed text-grafite-suave dark:border-borda-escura dark:bg-chumbo/60 dark:text-offwhite-suave"
                >
                  <p>{resposta}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PerguntasFrequentes;
