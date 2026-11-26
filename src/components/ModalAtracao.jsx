import { useEffect, useRef, useState } from 'react';

/**
 * Modal acessível com detalhes do artista, bio e prévia sonora client-side.
 */
function ModalAtracao({ atracao, onFechar }) {
  const fecharBtnRef = useRef(null);
  const audioCtxRef = useRef(null);
  const [tocandoPrevia, setTocandoPrevia] = useState(false);

  useEffect(() => {
    if (!atracao) return;

    fecharBtnRef.current?.focus();

    const aoPressionarTecla = (e) => {
      if (e.key === 'Escape') {
        onFechar();
      }
    };

    document.addEventListener('keydown', aoPressionarTecla);
    return () => {
      document.removeEventListener('keydown', aoPressionarTecla);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setTocandoPrevia(false);
    };
  }, [atracao, onFechar]);

  if (!atracao) return null;

  function alternarPrevia() {
    if (tocandoPrevia) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setTocandoPrevia(false);
      return;
    }

    // Gera uma breve sequência harmônica client-side via Web Audio API (sem dependência externa)
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;
        const notas = [220, 277.18, 329.63, 440];
        const agora = ctx.currentTime;

        notas.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const ganho = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, agora + i * 0.35);

          ganho.gain.setValueAtTime(0.001, agora + i * 0.35);
          ganho.gain.exponentialRampToValueAtTime(0.08, agora + i * 0.35 + 0.05);
          ganho.gain.exponentialRampToValueAtTime(0.001, agora + i * 0.35 + 0.6);

          osc.connect(ganho);
          ganho.connect(ctx.destination);
          osc.start(agora + i * 0.35);
          osc.stop(agora + i * 0.35 + 0.65);
        });

        setTocandoPrevia(true);
        window.setTimeout(() => {
          setTocandoPrevia(false);
          if (audioCtxRef.current === ctx) {
            ctx.close().catch(() => {});
            audioCtxRef.current = null;
          }
        }, 2200);
        return;
      }
    } catch {
      // Fallback visual caso Web Audio API não esteja disponível
    }

    setTocandoPrevia(true);
    window.setTimeout(() => setTocandoPrevia(false), 2200);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-atracao-titulo"
      className="fixed inset-0 z-50 flex items-center justify-center bg-carvao/80 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onFechar();
      }}
    >
      <div className="w-full max-w-xl border border-borda-clara bg-papel p-6 text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-borda-clara pb-4 dark:border-borda-escura">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota-label-dark">
              {atracao.estilo} · {atracao.cidade}
            </p>
            <h3
              id="modal-atracao-titulo"
              className="font-display mt-1 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl"
            >
              {atracao.nome}
            </h3>
          </div>

          <button
            ref={fecharBtnRef}
            type="button"
            onClick={onFechar}
            aria-label="Fechar detalhes da atração"
            className="border border-borda-clara bg-areia px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-grafite transition-colors hover:border-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite dark:hover:border-offwhite"
          >
            Fechar
          </button>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-b border-borda-clara pb-5 text-sm dark:border-borda-escura">
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
              Dia
            </dt>
            <dd className="mt-1 font-semibold">
              {atracao.dia}, {atracao.data}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
              Horário
            </dt>
            <dd className="mt-1 font-semibold tabular-nums">{atracao.horario}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
              Palco
            </dt>
            <dd className="mt-1 font-semibold">{atracao.palco}</dd>
          </div>
        </dl>

        <div className="mt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
            Sobre a atração
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-grafite dark:text-offwhite/90">
            {atracao.bio}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-borda-clara bg-areia p-4 dark:border-borda-escura dark:bg-chumbo">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
              Prévia da faixa
            </p>
            <p className="text-sm font-bold">{atracao.previaTitulo}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={alternarPrevia}
              aria-pressed={tocandoPrevia}
              className="border border-mata bg-mata px-4 py-2 text-xs font-bold uppercase tracking-wider text-papel transition-colors hover:bg-mata-clara"
            >
              {tocandoPrevia ? 'Parar prévia' : 'Ouvir prévia'}
            </button>
            <a
              href={atracao.previaUrl}
              onClick={(e) => {
                e.preventDefault();
                alternarPrevia();
              }}
              className="text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:text-terracota-escuro dark:hover:text-terracota-label-dark"
            >
              Link da faixa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAtracao;
