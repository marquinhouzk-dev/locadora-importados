import Card from '../components/Card'
import { carros } from '../data/carros'

export default function Carros() {
  return (
    <section>
      <h1>Nossa frota</h1>
      <div>
        {carros.map(c => <Card key={c.id} carro={c} />)}
      </div>
    </section>
  )
}