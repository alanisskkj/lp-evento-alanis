import { useState } from 'react'

function Newsletter() {
    const [email, setEmail] = useState('')
    const [enviado, setEnviado] = useState(false)
    function enviar(e) {
        e.preventDefault()
        setEnviado(true)
    }
    if (enviado) {
        return <p role="status">Pronto! Vamos avisar {email} sobre o próximo festival</p>
    }
    return (
        <form onSubmit={enviar}>
            <label>
                E-mail
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type="submit">Quero receber</button>
        </form>
    )
}

export default Newsletter