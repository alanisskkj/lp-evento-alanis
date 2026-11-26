/**
 * Cartão editorial clicável de uma atração do line-up.
 * Usa bordas finas 1px solid e tipografia de alto contraste.
 */
function CartaoAtracao({ atracao, onSelecionar }) {
  return (
    <article className="flex flex-col justify-between border border-borda-clara bg-papel transition-colors hover:border-grafite dark:border-borda-escura dark:bg-carvao dark:hover:border-offwhite">
      <button
        type="button"
        onClick={() => onSelecionar(atracao)}
        className="flex h-full w-full flex-col justify-between p-6 text-left"
      >
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-borda-clara pb-3 text-xs font-bold uppercase tracking-wider text-grafite-suave dark:border-borda-escura dark:text-offwhite-suave">
            <span>
              {atracao.dia} · {atracao.horario}
            </span>
            <span className="border border-borda-clara bg-areia px-2 py-0.5 text-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite">
              {atracao.palco}
            </span>
          </div>

          <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-grafite dark:text-offwhite">
            {atracao.nome}
          </h3>

          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-terracota-escuro dark:text-terracota">
            {atracao.estilo}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-grafite-suave dark:text-offwhite-suave">
            {atracao.descricao}
          </p>
        </div>

        <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grafite underline underline-offset-4 dark:text-offwhite">
          Ver detalhes e prévia
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </article>
  );
}

export default CartaoAtracao;
