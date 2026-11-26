import { programacao } from '../../data/evento';

function Programacao() {
  return (
    <section
      id="programacao"
      aria-labelledby="programacao-titulo"
      className="border-b border-borda-clara bg-papel px-4 py-16 text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 border-b border-borda-clara pb-6 dark:border-borda-escura">
          <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota">
            Cronograma Geral
          </p>
          <h2
            id="programacao-titulo"
            className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl"
          >
            Programação por Horário
          </h2>
        </div>

        <ol className="divide-y divide-borda-clara border border-borda-clara dark:divide-borda-escura dark:border-borda-escura">
          {programacao.map((item, index) => (
            <li
              key={index}
              className="grid grid-cols-1 gap-2 bg-papel p-4 transition-colors hover:bg-areia dark:bg-carvao dark:hover:bg-chumbo sm:grid-cols-12 sm:items-center sm:gap-4 sm:px-6 sm:py-5"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave sm:col-span-3">
                {item.dia}
              </span>

              <span className="font-display tabular-nums text-lg font-extrabold text-terracota-escuro dark:text-terracota sm:col-span-2">
                {item.horario}
              </span>

              <h3 className="font-sans text-base font-bold text-grafite dark:text-offwhite sm:col-span-7">
                {item.atividade}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Programacao;
