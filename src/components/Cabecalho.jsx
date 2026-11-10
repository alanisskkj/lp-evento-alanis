function Cabecalho() {
    return (
        <header className="bg-primaria text-white">
            <nav aria-label="Navegação principal" className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4 border-b border-white/10">

                <a href="#inicio" className="font-bold text-lg">SOM DA ALTA PAULISTA</a>

                <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium">
                    <a href="#atracoes" className="hover:text-amber-400 transition-colors">Atrações</a>
                    <a href="#programacao" className="hover:text-amber-400 transition-colors">Programação</a>
                    <a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre</a>
                    <a href="#duvidas" className="hover:text-amber-400 transition-colors">Dúvidas</a>
                </div>
            </nav>
        </header>
    );
}

export default Cabecalho;
