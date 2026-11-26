import { useState } from 'react';
import { atracoes } from '../../data/evento';
import CartaoAtracao from './CartaoAtracao';
import ModalAtracao from './ModalAtracao';

const DIAS_FILTRO = ['Todos', 'Sexta', 'Sábado', 'Domingo'];
const PALCOS_FILTRO = ['Todos os palcos', 'Palco Terra', 'Palco Mata'];

/**
 * Line-up interativo com filtros por dia e palco e modal acessível de detalhes.
 */
function Atracoes() {
  const [diaSelecionado, setDiaSelecionado] = useState('Todos');
  const [palcoSelecionado, setPalcoSelecionado] = useState('Todos os palcos');
  const [atracaoAtiva, setAtracaoAtiva] = useState(null);

  const atracoesFiltradas = atracoes.filter((item) => {
    const bateDia = diaSelecionado === 'Todos' || item.dia === diaSelecionado;
    const batePalco =
      palcoSelecionado === 'Todos os palcos' || item.palco === palcoSelecionado;
    return bateDia && batePalco;
  });

  return (
    <section
      id="atracoes"
      aria-labelledby="atracoes-titulo"
      className="border-b border-borda-clara bg-areia px-4 py-16 text-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-borda-clara pb-8 dark:border-borda-escura lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota">
              Line-up 2027
            </p>
            <h2
              id="atracoes-titulo"
              className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl"
            >
              Atrações Confirmadas
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            {/* Filtro por dia */}
            <div role="group" aria-label="Filtrar atrações por dia" className="flex flex-wrap gap-1.5">
              {DIAS_FILTRO.map((dia) => {
                const ativo = diaSelecionado === dia;
                return (
                  <button
                    key={dia}
                    type="button"
                    aria-pressed={ativo}
                    onClick={() => setDiaSelecionado(dia)}
                    className={`border px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                      ativo
                        ? 'border-grafite bg-grafite text-papel dark:border-offwhite dark:bg-offwhite dark:text-carvao'
                        : 'border-borda-clara bg-papel text-grafite hover:border-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite dark:hover:border-offwhite'
                    }`}
                  >
                    {dia}
                  </button>
                );
              })}
            </div>

            {/* Filtro por palco */}
            <div role="group" aria-label="Filtrar atrações por palco" className="flex flex-wrap gap-1.5">
              {PALCOS_FILTRO.map((palco) => {
                const ativo = palcoSelecionado === palco;
                return (
                  <button
                    key={palco}
                    type="button"
                    aria-pressed={ativo}
                    onClick={() => setPalcoSelecionado(palco)}
                    className={`border px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                      ativo
                        ? 'border-mata bg-mata text-papel'
                        : 'border-borda-clara bg-papel text-grafite hover:border-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite dark:hover:border-offwhite'
                    }`}
                  >
                    {palco}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p role="status" className="mt-6 text-xs font-semibold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
          Exibindo {atracoesFiltradas.length} de {atracoes.length} atrações
        </p>

        {atracoesFiltradas.length === 0 ? (
          <div className="mt-6 border border-borda-clara bg-papel p-8 text-center dark:border-borda-escura dark:bg-carvao">
            <p className="text-base font-semibold">
              Nenhuma atração encontrada para os filtros selecionados.
            </p>
            <button
              type="button"
              onClick={() => {
                setDiaSelecionado('Todos');
                setPalcoSelecionado('Todos os palcos');
              }}
              className="mt-4 border border-grafite px-4 py-2 text-xs font-bold uppercase tracking-wider dark:border-offwhite"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {atracoesFiltradas.map((atracao) => (
              <CartaoAtracao
                key={atracao.id}
                atracao={atracao}
                onSelecionar={setAtracaoAtiva}
              />
            ))}
          </div>
        )}
      </div>

      <ModalAtracao
        atracao={atracaoAtiva}
        onFechar={() => setAtracaoAtiva(null)}
      />
    </section>
  );
}

export default Atracoes;
