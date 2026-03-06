import './index.css'

const PlanetItem = props => {
  const {planetList} = props
  const {name, imageUrl, description} = planetList
  return (
    <div className="list-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
