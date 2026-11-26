import { useEffect, useRef, useState } from 'react';
import fotoFestival from '../assets/FotoFestival.avif';
import { evento } from '../../data/evento';
import BotaoLembrete from './BotaoLembrete';

/**
 * Seção Hero em tela cheia (100vh) com vídeo de fundo em loop,
 * overlay de alto contraste e controles acessíveis de Pause/Play e Som.
 */
function Hero({ onAbrirCheckout }) {
  const videoRef = useRef(null);
  const [pausado, setPausado] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [comSom, setComSom] = useState(false);
  const [videoDisponivel, setVideoDisponivel] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (pausado) {
      video.pause();
    } else {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          setPausado(true);
        });
      }
    }
  }, [pausado]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = !comSom;
    }
  }, [comSom]);

  function alternarReproducao() {
    setPausado((atual) => !atual);
  }

  function alternarSom() {
    setComSom((atual) => !atual);
  }

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-end border-b border-borda-clara bg-carvao text-offwhite dark:border-borda-escura"
    >
      {/* Imagem de fallback estilizada para garantir visual editorial mesmo sem vídeo externo */}
      <img
        src={fotoFestival}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {videoDisponivel && (
        <video
          ref={videoRef}
          autoPlay={!pausado}
          loop
          muted={!comSom}
          playsInline
          poster={fotoFestival}
          aria-hidden="true"
          onError={() => setVideoDisponivel(false)}
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-crowd-cheering-at-a-concert-15058-large.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* Overlay sólido para garantir contraste >= 4.5:1 sobre o vídeo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-carvao/75"
      />

      {/* Controles discretos de mídia no canto superior direito */}
      <div className="absolute top-5 right-4 z-20 flex items-center gap-2 sm:right-8">
        <button
          type="button"
          onClick={alternarReproducao}
          aria-label={pausado ? 'Reproduzir vídeo de fundo' : 'Pausar vídeo de fundo'}
          aria-pressed={pausado}
          className="inline-flex items-center gap-1.5 border border-offwhite/40 bg-carvao/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-offwhite hover:bg-carvao"
        >
          {pausado ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="6,4 20,12 6,20" />
              </svg>
              <span>Play</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
              <span>Pausar</span>
            </>
          )}
        </button>

        {videoDisponivel && (
          <button
            type="button"
            onClick={alternarSom}
            aria-label={comSom ? 'Desativar som do vídeo' : 'Ativar som do vídeo'}
            aria-pressed={comSom}
            className="inline-flex items-center gap-1.5 border border-offwhite/40 bg-carvao/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-offwhite hover:bg-carvao"
          >
            {comSom ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
                <span>Som ativo</span>
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
                <span>Sem som</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Conteúdo editorial principal */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-8 lg:pb-20">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-offwhite">
          <span className="border border-terracota bg-terracota px-2.5 py-1 text-grafite">
            {evento.edicao}
          </span>
          <span className="border border-offwhite/40 px-2.5 py-1">
            {evento.local}
          </span>
        </div>

        <h1
          id="hero-title"
          className="font-display max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-offwhite sm:text-6xl lg:text-7xl"
        >
          Festival Som da Alta Paulista
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-offwhite/90 sm:text-xl">
          Três dias de música independente, viola contemporânea e cultura do Oeste Paulista ao ar livre.
        </p>

        <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-4 border-t border-b border-offwhite/25 py-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-offwhite/70">Quando</dt>
            <dd className="mt-1 text-sm font-semibold text-offwhite">{evento.data}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-offwhite/70">Horário</dt>
            <dd className="mt-1 text-sm font-semibold text-offwhite">{evento.horario}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-offwhite/70">Palcos</dt>
            <dd className="mt-1 text-sm font-semibold text-offwhite">Palco Terra &amp; Palco Mata</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap items-start gap-4">
          <button
            type="button"
            onClick={() => onAbrirCheckout('pista')}
            className="border border-terracota bg-terracota px-6 py-3 text-sm font-bold uppercase tracking-wider text-grafite transition-colors hover:bg-offwhite hover:border-offwhite"
          >
            Comprar Ingressos
          </button>

          <a
            href="#atracoes"
            className="border border-offwhite bg-carvao/60 px-6 py-3 text-sm font-bold uppercase tracking-wider text-offwhite transition-colors hover:bg-offwhite hover:text-carvao"
          >
            Explorar Line-up
          </a>

          <BotaoLembrete />
        </div>
      </div>
    </section>
  );
}

export default Hero;
