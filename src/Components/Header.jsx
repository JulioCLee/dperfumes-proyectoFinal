import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/img/banner.jpg';
import banner2 from '../assets/img/banner2.jpg';


const Header = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Header