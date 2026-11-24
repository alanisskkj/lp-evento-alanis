import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Solidário", valor: 150 },
  { rotulo: "Passaporte", valor: 110 },
  { rotulo: "Meia-Entrada", valor: 70 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; 
      const y = 20 + i * 50;

      
      ctx.fillStyle = "#5b21b6"; 
      ctx.fillRect(110, y, largura, 24);

      ctx.fillStyle = "#111827";
      ctx.font = "14px sans-serif";
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      ctx.fillText(item.rotulo, 10, y + 12);

      ctx.fillText(String(item.valor), 110 + largura + 8, y + 12);
    });
  }, []);

  return (
    <section id="grafico" className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900">Ingressos garantidos por categoria</h2>
        <canvas
          ref={canvasRef}
          width={380}
          height={170}
          role="img"
          aria-label="Gráfico de barras com ingressos garantidos: Solidário com 150, Passaporte com 110 e Meia-Entrada com 70."
          className="mt-6 max-w-full"
        />
      </div>
    </section>
  );
}

export default Grafico;
