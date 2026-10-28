export default function Card({ carro }) {
  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-400 transition">
      <img src={carro.img} alt={carro.nome} className="h-44 w-full object-cover" />
      <div className="p-4">
        <p className="text-xs text-neutral-500 uppercase">{carro.pais}</p>
        <h3 className="font-semibold mt-1">{carro.nome}</h3>
        <p className="mt-3 text-amber-400 font-bold">
          R$ {carro.diaria.toLocaleString('pt-BR')}
          <span className="text-xs text-neutral-400 font-normal"> /dia</span>
        </p>
      </div>
    </div>
  )
}