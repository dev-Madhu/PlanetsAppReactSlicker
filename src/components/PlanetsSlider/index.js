// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem planetDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
