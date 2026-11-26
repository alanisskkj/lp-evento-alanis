import { useEffect, useRef } from 'react';

const dados = [
  { rotulo: 'Solidário', valor: 150 },
  { rotulo: 'Passaporte', valor: 110 },
  { rotulo: 'Meia-Entrada', valor: 70 },
];

function Grafico({ tema }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const escuro = tema === 'dark';
    const corTexto = escuro ? '#F2EFE9' : '#141413';
    const corBarra = escuro ? '#D94E28' : '#1E4D3B';
    const corTrilho = escuro ? '#2F2E2B' : '#EAE6DF';

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const larguraMax = 210;
      const largura = (item.valor / maior) * larguraMax;
      const y = 20 + i * 50;

      ctx.fillStyle = corTrilho;
      ctx.fillRect(120, y, larguraMax, 24);

      ctx.fillStyle = corBarra;
      ctx.fillRect(120, y, largura, 24);

      ctx.fillStyle = corTexto;
      ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      ctx.fillText(item.rotulo, 8, y + 12);

      ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(String(item.valor), 120 + largura + 10, y + 12);
    });
  }, [tema]);

  return (
    <section
      id="grafico"
      aria-labelledby="grafico-titulo"
      className="border-b border-borda-clara bg-areia px-4 py-16 text-grafite dark:border-borda-escura dark:bg-chumbo dark:text-offwhite sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota-label-dark">
            Transparência Cultural
          </p>
          <h2
            id="grafico-titulo"
            className="font-display mt-2 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl"
          >
            Ingressos garantidos por modalidade
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-grafite-suave dark:text-offwhite-suave">
            Parte da bilheteria solidária é revertida integralmente para oficinas e instrumentos do projeto musical estudantil de Osvaldo Cruz.
          </p>
        </div>

        <div className="border border-borda-clara bg-papel p-6 dark:border-borda-escura dark:bg-carvao lg:col-span-7">
          <canvas
            ref={canvasRef}
            width={400}
            height={170}
            role="img"
            aria-label="Gráfico de barras com ingressos garantidos: Solidário com 150, Passaporte com 110 e Meia-Entrada com 70."
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Grafico;
