import fotoFestival from "../assets/FotoFestival.avif"

function Hero() {
    return (
        <section
            id="inicio"
            aria-labelledby="hero-title"
            className="flex min-h-130 items-center bg-cover bg-center px-6 py-20 text-white sm:px-12 lg:px-20"
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(28, 10, 52, 0.9) 0%, rgba(50, 20, 90, 0.82) 58%, rgba(50, 20, 90, 0.76) 100%), url(${fotoFestival})`,
            }}
        >
            <div className="mx-auto w-full max-w-7xl">
                <h1 id="hero-title" className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
                    Festival Som da Alta Paulista
                </h1>
                <p className="mt-4 max-w-2xl text-lg sm:text-xl">
                    Dois dias de música independente no coração do Oeste Paulista.
                </p>
                <p className="mt-4 max-w-2xl">
                    13 e 14 de março de 2027 - das 16h às 23h, no Parque das Águas - Osvaldo Cruz
                </p>

                <a
                    href="#atracoes"
                    className="mt-8 inline-block rounded-full bg-destaque px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-white hover:text-primaria"
                >
                    Confira as atrações
                </a>
            </div>
        </section>
    )
}
export default Hero

