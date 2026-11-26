import { useEffect, useRef, useState } from 'react';
import { setoresIngressos } from '../../data/evento';

/**
 * Modal de simulação de checkout client-side.
 * Permite escolher setor disponível, quantidade e simular reserva sem back-end.
 */
function ModalCheckout({ aberto, setorInicialId, onFechar }) {
  const setoresDisponiveis = setoresIngressos.filter((s) => s.status !== 'esgotado');
  const [setorId, setSetorId] = useState(setorInicialId || 'pista');
  const [quantidade, setQuantidade] = useState(1);
  const [nomeComprador, setNomeComprador] = useState('');
  const [emailComprador, setEmailComprador] = useState('');
  const [confirmado, setConfirmado] = useState(false);

  const fecharBtnRef = useRef(null);

  useEffect(() => {
    if (!aberto) return;
    if (setorInicialId && setoresDisponiveis.some((s) => s.id === setorInicialId)) {
      setSetorId(setorInicialId);
    }
    setConfirmado(false);
    fecharBtnRef.current?.focus();

    const aoPressionarTecla = (e) => {
      if (e.key === 'Escape') onFechar();
    };
    document.addEventListener('keydown', aoPressionarTecla);
    return () => document.removeEventListener('keydown', aoPressionarTecla);
  }, [aberto, setorInicialId, onFechar]);

  if (!aberto) return null;

  const setorAtual =
    setoresDisponiveis.find((s) => s.id === setorId) || setoresDisponiveis[0];
  const total = setorAtual ? setorAtual.preco * quantidade : 0;

  function finalizarSimulacao(e) {
    e.preventDefault();
    setConfirmado(true);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-titulo"
      className="fixed inset-0 z-50 flex items-center justify-center bg-carvao/80 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onFechar();
      }}
    >
      <div className="w-full max-w-lg border border-borda-clara bg-papel p-6 text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-borda-clara pb-4 dark:border-borda-escura">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota">
              Simulação de Reserva
            </p>
            <h2
              id="checkout-titulo"
              className="font-display mt-1 text-2xl font-extrabold uppercase tracking-tight"
            >
              Selecionar Ingressos
            </h2>
          </div>

          <button
            ref={fecharBtnRef}
            type="button"
            onClick={onFechar}
            aria-label="Fechar janela de compra simulada"
            className="border border-borda-clara bg-areia px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-grafite hover:border-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite dark:hover:border-offwhite"
          >
            Fechar
          </button>
        </div>

        {confirmado ? (
          <div role="status" className="mt-6 space-y-4">
            <div className="border border-mata bg-mata p-5 text-papel">
              <p className="font-display text-lg font-extrabold uppercase">
                Reserva Simulada Confirmada
              </p>
              <p className="mt-2 text-sm">
                {quantidade}x Passaporte <strong>{setorAtual.nome}</strong> para{' '}
                <strong>{nomeComprador}</strong> ({emailComprador}).
              </p>
              <p className="mt-2 text-sm font-bold tabular-nums">
                Total simulado: R$ {total}
              </p>
            </div>
            <p className="text-xs text-grafite-suave dark:text-offwhite-suave">
              Ambiente de demonstração: nenhuma cobrança foi realizada.
            </p>
            <button
              type="button"
              onClick={onFechar}
              className="w-full border border-grafite bg-grafite px-5 py-3 text-xs font-bold uppercase tracking-wider text-papel dark:border-offwhite dark:bg-offwhite dark:text-carvao"
            >
              Concluir
            </button>
          </div>
        ) : (
          <form onSubmit={finalizarSimulacao} className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="checkout-setor"
                className="block text-xs font-bold uppercase tracking-wider"
              >
                Setor
              </label>
              <select
                id="checkout-setor"
                value={setorId}
                onChange={(e) => setSetorId(e.target.value)}
                className="mt-1.5 w-full border border-borda-clara bg-areia px-3 py-2.5 text-sm font-semibold text-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite"
              >
                {setoresDisponiveis.map((setor) => (
                  <option key={setor.id} value={setor.id}>
                    {setor.nome} — {setor.precoFormatado} ({setor.statusTexto})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="checkout-qtd"
                className="block text-xs font-bold uppercase tracking-wider"
              >
                Quantidade
              </label>
              <input
                id="checkout-qtd"
                type="number"
                min={1}
                max={6}
                value={quantidade}
                onChange={(e) =>
                  setQuantidade(Math.max(1, Math.min(6, Number(e.target.value) || 1)))
                }
                className="tabular-nums mt-1.5 w-full border border-borda-clara bg-areia px-3 py-2.5 text-sm font-semibold text-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite"
              />
            </div>

            <div>
              <label
                htmlFor="checkout-nome"
                className="block text-xs font-bold uppercase tracking-wider"
              >
                Nome do titular
              </label>
              <input
                id="checkout-nome"
                type="text"
                required
                value={nomeComprador}
                onChange={(e) => setNomeComprador(e.target.value)}
                placeholder="Nome completo"
                className="mt-1.5 w-full border border-borda-clara bg-areia px-3 py-2.5 text-sm text-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite"
              />
            </div>

            <div>
              <label
                htmlFor="checkout-email"
                className="block text-xs font-bold uppercase tracking-wider"
              >
                E-mail para envio simulado
              </label>
              <input
                id="checkout-email"
                type="email"
                required
                value={emailComprador}
                onChange={(e) => setEmailComprador(e.target.value)}
                placeholder="voce@exemplo.com.br"
                className="mt-1.5 w-full border border-borda-clara bg-areia px-3 py-2.5 text-sm text-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite"
              />
            </div>

            <div className="flex items-center justify-between border-t border-borda-clara pt-4 dark:border-borda-escura">
              <span className="text-xs font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
                Total estimado
              </span>
              <span className="font-display tabular-nums text-2xl font-extrabold">
                R$ {total}
              </span>
            </div>

            <button
              type="submit"
              className="w-full border border-terracota bg-terracota px-5 py-3 text-xs font-bold uppercase tracking-wider text-papel transition-colors hover:border-grafite hover:bg-grafite dark:hover:border-offwhite dark:hover:bg-offwhite dark:hover:text-carvao"
            >
              Confirmar Reserva Simulada
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ModalCheckout;
