import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/img/banner.jpg';
import banner2 from '../assets/img/banner2.jpg';


const Header = () => {
  return (
    <div>
      <div className='slayer'>
      <p> 🔖 El regalo perfecto lo encuentras en D'Perfumes 🔖</p>
      </div>
    <Carousel>
      <Carousel.Item>
        <img
        // style={{height:"440px" }}
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Header