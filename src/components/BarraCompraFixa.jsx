/**
 * Barra fixa na parte inferior da tela (Sticky CTA) com acesso rápido
 * aos setores e ao modal de compra simulada.
 */
function BarraCompraFixa({ onAbrirCheckout }) {
  return (
    <div
      role="region"
      aria-label="Atalho para compra de ingressos"
      className="fixed right-0 bottom-0 left-0 z-40 border-t border-borda-clara bg-papel text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <div className="min-w-0">
          <p className="truncate text-xs font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
            Passaporte 3 dias
          </p>
          <p className="font-display tabular-nums text-base font-extrabold sm:text-lg">
            A partir de R$ 90
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="#ingressos"
            className="hidden border border-borda-clara bg-areia px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-grafite transition-colors hover:border-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite dark:hover:border-offwhite sm:inline-block"
          >
            Ver Setores
          </a>

          <button
            type="button"
            onClick={() => onAbrirCheckout('pista')}
            className="border border-terracota bg-terracota px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-grafite transition-colors hover:border-grafite hover:bg-grafite hover:text-papel dark:hover:border-offwhite dark:hover:bg-offwhite dark:hover:text-carvao sm:px-6"
          >
            Comprar Ingressos
          </button>
        </div>
      </div>
    </div>
  );
}

export default BarraCompraFixa;
