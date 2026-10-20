function Hero() {
    return (
        <section className="bg-primaria px-4 py-20 text-white">
            <h1 className="text-4xl font-extrabold">Festival Som da Alta Paulista</h1>
            <p className="mt-4">Dois dias de música independente no coração do Oeste Paulista.</p>
            <p className="mt-4">13 e 14 de março de 2027 - das 16h às 23h, no Parque das Águas - Osvaldo Cruz</p>

            <a
                href="#atracoes"
                className="inline-block bg-white text-primaria font-bold px-6 py-3 rounded-full shadow-lg hover:bg-amber-400 hover:text-black transition-all"
            >
                Confira as atrações
            </a>
        </section>
    )
}
export default Hero

