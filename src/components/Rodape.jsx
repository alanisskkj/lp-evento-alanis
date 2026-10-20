import { evento } from '../../data/evento'
function Rodape() {
    return <footer className="bg-primaria text-white" >
        {evento.nome} · {evento.data} · {evento.frase}
    </footer >
}
export default Rodape


