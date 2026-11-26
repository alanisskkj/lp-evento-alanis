import { useEffect, useState } from 'react';
import { evento } from '../../data/evento';

function calcularTempoRestante(dataAlvoMs) {
  const diferenca = Math.max(0, dataAlvoMs - Date.now());
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  return { dias, horas, minutos, segundos, encerrado: diferenca === 0 };
}

/**
 * Cronômetro regressivo em tempo real com tipografia tabular (tabular-nums).
 */
function Cronometro() {
  const dataAlvoMs = new Date(evento.dataIsoInicio).getTime();
  const [tempo, setTempo] = useState(() => calcularTempoRestante(dataAlvoMs));

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setTempo(calcularTempoRestante(dataAlvoMs));
    }, 1000);

    return () => window.clearInterval(intervalo);
  }, [dataAlvoMs]);

  const blocos = [
    { valor: String(tempo.dias).padStart(2, '0'), rotulo: 'Dias' },
    { valor: String(tempo.horas).padStart(2, '0'), rotulo: 'Horas' },
    { valor: String(tempo.minutos).padStart(2, '0'), rotulo: 'Minutos' },
    { valor: String(tempo.segundos).padStart(2, '0'), rotulo: 'Segundos' },
  ];

  return (
    <section
      aria-label="Contagem regressiva para o início do festival"
      className="border-b border-borda-clara bg-areia text-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite"
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-8 sm:px-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota-label-dark">
            Contagem regressiva
          </p>
          <h2 className="font-display mt-1 text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
            {tempo.encerrado
              ? 'O festival já começou!'
              : 'Faltam para a abertura dos portões'}
          </h2>
        </div>

        <div
          aria-live="off"
          className="grid grid-cols-4 border border-borda-clara bg-papel dark:border-borda-escura dark:bg-carvao"
        >
          {blocos.map((bloco, index) => (
            <div
              key={bloco.rotulo}
              className={`px-3 py-3 text-center sm:px-6 sm:py-4 ${
                index > 0 ? 'border-l border-borda-clara dark:border-borda-escura' : ''
              }`}
            >
              <span className="font-display tabular-nums block text-2xl font-extrabold tracking-tight sm:text-4xl">
                {bloco.valor}
              </span>
              <span className="mt-1 block text-[11px] font-bold uppercase tracking-wider text-grafite-suave dark:text-offwhite-suave">
                {bloco.rotulo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cronometro;
