import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight">Garagem 47</h1>
      <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
        Importados para alugar, sem enrolação.
      </p>
      <Link
        to="/carros"
        className="inline-block mt-8 bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-300 transition"
      >
        Ver carros
      </Link>
    </section>
  )
}