import { programacao } from '../../data/evento'

function Programacao() {
    return (
        <section id="programacao" className="py-12 max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Programação</h2>

            <div className="flex flex-col gap-4">
                {programacao.map((item, index) => (
                    <div
                        key={index}
                        className="bg-indigo-50/40 border border-indigo-100/50 rounded-xl p-6 transition-all hover:bg-indigo-50/70"
                    >
                        <span className="block text-sm font-bold text-gray-500 mb-1">
                            {item.dia} — {item.horario}
                        </span>

                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {item.atividade}
                        </h3>

                        <p className="text-gray-600 text-sm">
                            Apresentação especial no Festival Som da Alta Paulista.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Programacao
