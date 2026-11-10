import { useState } from 'react'

function Newsletter() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [enviado, setEnviado] = useState(false)
    function enviar(e) {
        e.preventDefault()
        setEnviado(true)
    }
    return (
        <section id="inscricao" className="px-4 py-16">
            <div className="mx-auto max-w-2xl">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Receba novidades do festival</h2>
                {enviado ? (
                    <p role="status" className="text-gray-900">Pronto, {nome}! Vamos avisar {email} sobre o próximo festival.</p>
                ) : (
                    <form onSubmit={enviar} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome" className="font-semibold text-gray-900">Nome</label>
                            <input
                                id="nome"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="rounded border border-gray-600 px-3 py-2 text-gray-900"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-semibold text-gray-900">E-mail</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded border border-gray-600 px-3 py-2 text-gray-900"
                            />
                        </div>
                        <button type="submit" className="w-fit rounded bg-primaria px-5 py-3 font-bold text-white hover:bg-indigo-900">
                            Quero receber
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}

export default Newsletter