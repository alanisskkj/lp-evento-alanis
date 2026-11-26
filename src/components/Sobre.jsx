import { sobre } from '../../data/evento';

function Sobre() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="border-b border-borda-clara bg-papel px-4 py-16 text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {sobre.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
          >
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota-label-dark">
                Manifesto &amp; Território
              </p>
              <h2
                id="sobre-titulo"
                className="font-display mt-2 text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl"
              >
                {item.slogam}
              </h2>
            </div>

            <div className="border-t border-borda-clara pt-6 dark:border-borda-escura lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <p className="inline-block border border-mata bg-mata px-3 py-1 text-xs font-bold uppercase tracking-wider text-papel">
                {item.numeros}
              </p>
              <p className="mt-4 text-base leading-relaxed text-grafite-suave dark:text-offwhite-suave">
                {item.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sobre;
