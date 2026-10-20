function CartaoAtracao({ nome, estilo, descricao }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{nome}</h3>
        
        <p className="text-sm font-semibold text-indigo-600 mb-3">{estilo}</p>
        
        <p className="text-sm text-gray-600 leading-relaxed">{descricao}</p>
      </div>
    </article>
  )
}

export default CartaoAtracao
