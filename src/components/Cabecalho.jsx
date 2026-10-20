function Cabecalho() {
    return (
        <header className="bg-primaria text-white">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center border-b border-white/10">

                <span className="font-bold text-lg tracking-wider">SOM DA ALTA PAULISTA</span>

                <div className="flex gap-6 font-medium">
                    <a href="#atracoes" className="hover:text-amber-400 transition-colors">Atrações</a>
                    <a href="#programacao" className="hover:text-amber-400 transition-colors">Programação</a>
                    <a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre</a>
                </div>
            </nav>
        </header>
    );
}

export default Cabecalho;
