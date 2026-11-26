import { useState } from 'react';

function Newsletter() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  function enviar(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section
      id="inscricao"
      aria-labelledby="inscricao-titulo"
      className="border-b border-borda-clara bg-papel px-4 py-16 text-grafite dark:border-borda-escura dark:bg-carvao dark:text-offwhite sm:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-terracota-escuro dark:text-terracota">
          Boletim do Festival
        </p>
        <h2
          id="inscricao-titulo"
          className="font-display mt-2 mb-6 text-3xl font-extrabold uppercase tracking-tight"
        >
          Receba novidades e horários
        </h2>

        {enviado ? (
          <div
            role="status"
            className="border border-mata bg-mata p-6 text-papel"
          >
            <p className="font-bold">
              Cadastro registrado para {nome} ({email}).
            </p>
            <p className="mt-1 text-sm text-papel/90">
              Simulação concluída no navegador — nenhum dado foi enviado a servidor externo.
            </p>
          </div>
        ) : (
          <form onSubmit={enviar} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-xs font-bold uppercase tracking-wider">
                Nome completo
              </label>
              <input
                id="nome"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex.: Maria Clara Silva"
                className="border border-borda-clara bg-areia px-4 py-3 text-sm text-grafite placeholder:text-grafite-suave dark:border-borda-escura dark:bg-chumbo dark:text-offwhite dark:placeholder:text-offwhite-suave"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@exemplo.com.br"
                className="border border-borda-clara bg-areia px-4 py-3 text-sm text-grafite placeholder:text-grafite-suave dark:border-borda-escura dark:bg-chumbo dark:text-offwhite dark:placeholder:text-offwhite-suave"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-fit border border-grafite bg-grafite px-6 py-3 text-xs font-bold uppercase tracking-wider text-papel transition-colors hover:border-terracota hover:bg-terracota hover:text-grafite dark:border-offwhite dark:bg-offwhite dark:text-carvao dark:hover:border-terracota dark:hover:bg-terracota dark:hover:text-grafite"
            >
              Quero receber avisos
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
