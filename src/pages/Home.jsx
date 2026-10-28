import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Garagem 47</h1>
      <p>Importados para alugar, sem enrolação.</p>
      <Link to="/carros">Ver carros</Link>
    </section>
  )
}