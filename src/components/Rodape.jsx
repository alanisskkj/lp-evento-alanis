import { evento } from '../../data/evento';

function Rodape() {
  return (
    <footer className="bg-areia px-4 py-10 text-grafite dark:bg-chumbo dark:text-offwhite sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-borda-clara pt-6 dark:border-borda-escura sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-tight">
            {evento.nome}
          </p>
          <p className="mt-1 text-xs text-grafite-suave dark:text-offwhite-suave">
            {evento.data} · {evento.local}
          </p>
        </div>

        <p className="border border-borda-clara bg-papel px-3 py-1.5 text-xs font-semibold text-grafite-suave dark:border-borda-escura dark:bg-carvao dark:text-offwhite-suave">
          {evento.frase}
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
