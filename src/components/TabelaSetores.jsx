import { beneficiosComparativo, setoresIngressos } from '../../data/evento';

function obterEstiloBadge(status) {
  switch (status) {
    case 'esgotado':
      return 'border border-borda-clara bg-areia text-grafite-suave line-through dark:border-borda-escura dark:bg-chumbo dark:text-offwhite-suave';
    case 'ultimas':
      return 'border border-amber-800 bg-amber-200 text-amber-950 dark:border-amber-400 dark:bg-amber-900/60 dark:text-amber-100';
    case 'disponivel':
    default:
      return 'border border-mata bg-mata text-papel dark:border-mata-clara dark:bg-mata dark:text-offwhite';
  }
}

/**
 * Tabela comparativa responsiva dos setores: Pista, VIP, Open Bar e Backstage.
 */
function TabelaSetores({ onSelecionarSetor }) {
  return (
    <section
      id="ingressos"
      aria-labelledby="ingressos-titulo"
      className="border-b border-borda-clara bg-papel px-4 py-16 text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-borda-clara pb-6 dark:border-borda-escura md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota-label-dark">
              Passaportes e Lotes
            </p>
            <h2
              id="ingressos-titulo"
              className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl"
            >
              Comparativo de Setores
            </h2>
          </div>
          <p className="max-w-md text-sm text-grafite-suave dark:text-offwhite-suave">
            Valores referentes ao passaporte para os três dias de evento. Deslize horizontalmente em telas menores para comparar todos os benefícios.
          </p>
        </div>

        <div className="overflow-x-auto border border-borda-clara dark:border-borda-escura">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-borda-clara bg-areia dark:border-borda-escura dark:bg-chumbo">
                <th
                  scope="col"
                  className="p-4 text-xs font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave sm:p-5"
                >
                  Benefícios / Setor
                </th>
                {setoresIngressos.map((setor) => (
                  <th
                    key={setor.id}
                    scope="col"
                    className="border-l border-borda-clara p-4 align-top dark:border-borda-escura sm:p-5"
                  >
                    <div className="flex flex-col gap-2">
                      <span
                        className={`inline-block w-fit px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${obterEstiloBadge(
                          setor.status
                        )}`}
                      >
                        {setor.statusTexto}
                      </span>
                      <span className="font-display text-xl font-extrabold uppercase tracking-tight">
                        {setor.nome}
                      </span>
                      <span className="text-xs font-medium text-grafite-suave dark:text-offwhite-suave">
                        {setor.subtitulo}
                      </span>
                      <span className="font-display tabular-nums mt-1 text-2xl font-extrabold">
                        {setor.precoFormatado}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {beneficiosComparativo.map((beneficio) => (
                <tr
                  key={beneficio.id}
                  className="border-b border-borda-clara transition-colors hover:bg-areia/50 dark:border-borda-escura dark:hover:bg-chumbo/50"
                >
                  <th
                    scope="row"
                    className="p-4 text-sm font-semibold text-grafite dark:text-offwhite sm:p-5"
                  >
                    {beneficio.label}
                  </th>
                  {setoresIngressos.map((setor) => {
                    const incluso = setor.beneficios[beneficio.id];
                    return (
                      <td
                        key={`${setor.id}-${beneficio.id}`}
                        className="border-l border-borda-clara p-4 text-center text-base font-bold dark:border-borda-escura sm:p-5"
                      >
                        {incluso ? (
                          <span
                            aria-label="Incluso"
                            className="inline-flex h-6 w-6 items-center justify-center border border-mata bg-mata text-xs text-papel"
                          >
                            ✓
                          </span>
                        ) : (
                          <span
                            aria-label="Não incluso"
                            className="text-grafite-suave dark:text-offwhite-suave"
                          >
                            —
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="bg-areia/70 dark:bg-chumbo/70">
                <th
                  scope="row"
                  className="p-4 text-xs font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave sm:p-5"
                >
                  Reserva (Simulação)
                </th>
                {setoresIngressos.map((setor) => {
                  const esgotado = setor.status === 'esgotado';
                  return (
                    <td
                      key={`acao-${setor.id}`}
                      className="border-l border-borda-clara p-4 dark:border-borda-escura sm:p-5"
                    >
                      <button
                        type="button"
                        disabled={esgotado}
                        onClick={() => onSelecionarSetor(setor.id)}
                        className={`w-full border px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                          esgotado
                            ? 'cursor-not-allowed border-borda-clara bg-areia text-grafite-suave line-through dark:border-borda-escura dark:bg-chumbo dark:text-offwhite-suave'
                            : 'border-terracota bg-terracota text-papel hover:border-grafite hover:bg-grafite dark:hover:border-offwhite dark:hover:bg-offwhite dark:hover:text-carvao'
                        }`}
                      >
                        {esgotado ? 'Esgotado' : `Selecionar ${setor.nome}`}
                      </button>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TabelaSetores;
