/**
 * Cabeçalho principal com navegação semântica e alternador de tema Claro/Escuro.
 */
function Cabecalho({ tema, onAlternarTema }) {
  return (
    <header className="sticky top-0 z-40 border-b border-borda-clara bg-papel text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8"
      >
        <a
          href="#inicio"
          className="font-display text-base font-extrabold tracking-tight uppercase sm:text-lg"
        >
          Som da Alta Paulista
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
          <a
            href="#atracoes"
            className="transition-colors hover:text-terracota-escuro dark:hover:text-terracota"
          >
            Line-up
          </a>
          <a
            href="#programacao"
            className="transition-colors hover:text-terracota-escuro dark:hover:text-terracota"
          >
            Programação
          </a>
          <a
            href="#ingressos"
            className="transition-colors hover:text-terracota-escuro dark:hover:text-terracota"
          >
            Ingressos
          </a>
          <a
            href="#sobre"
            className="transition-colors hover:text-terracota-escuro dark:hover:text-terracota"
          >
            Sobre
          </a>
          <a
            href="#duvidas"
            className="transition-colors hover:text-terracota-escuro dark:hover:text-terracota"
          >
            Dúvidas
          </a>

          <button
            type="button"
            onClick={onAlternarTema}
            aria-label="Alternar tema claro e escuro"
            aria-pressed={tema === 'dark'}
            title={tema === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            className="inline-flex items-center gap-2 border border-borda-clara bg-areia px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-grafite transition-colors hover:border-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite dark:hover:border-offwhite"
          >
            {tema === 'dark' ? (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                <span className="hidden sm:inline">Claro</span>
              </>
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span className="hidden sm:inline">Escuro</span>
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;
