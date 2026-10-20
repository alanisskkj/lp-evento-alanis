import { sobre } from '../../data/evento'

function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        {sobre.map((item, index) => (
          <div key={index} className="space-y-8">
            
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl leading-tight">
              {item.slogam}
            </h2>
            
            <div className="inline-block bg-indigo-50 border border-indigo-100 rounded-full px-6 py-2 shadow-sm">
              <p className="text-sm md:text-base text-indigo-700 font-bold tracking-wide uppercase">
                {item.numeros}
              </p>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto pt-2">
              {item.descricao}
            </p>
            
          </div>
        ))}
        
      </div>
    </section>
  )
}

export default Sobre
