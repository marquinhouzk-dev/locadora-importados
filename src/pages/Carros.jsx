import { useState } from 'react'
import Card from '../components/Card'
import { carros } from '../data/carros'

export default function Carros() {
  const [pais, setPais] = useState('Todos')
  const paises = ['Todos', ...new Set(carros.map(c => c.pais))]
  const lista = pais === 'Todos' ? carros : carros.filter(c => c.pais === pais)

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Nossa frota</h1>
      <div className="flex gap-2 mb-8 flex-wrap">
        {paises.map(p => (
          <button
            key={p}
            onClick={() => setPais(p)}
            className={`px-4 py-1 rounded-full text-sm border ${
              pais === p ? 'bg-amber-400 text-black border-amber-400' : 'border-neutral-700'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map(c => <Card key={c.id} carro={c} />)}
      </div>
    </section>
  )
}