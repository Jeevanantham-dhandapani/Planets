import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="heading">Planets</h1>
      <Slider dots={false} slidToShow={1}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetList={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
