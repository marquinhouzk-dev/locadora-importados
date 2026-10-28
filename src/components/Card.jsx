export default function Card({ carro }) {
  return (
    <div>
      <img src={carro.img} alt={carro.nome} />
      <p>{carro.pais}</p>
      <h3>{carro.nome}</h3>
      <p>R$ {carro.diaria.toLocaleString('pt-BR')} /dia</p>
    </div>
  )
}