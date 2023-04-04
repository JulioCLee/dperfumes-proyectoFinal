import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const CardPerfumes = ({ perfume }) => {

    const navigate = useNavigate();

    const detallePerfume = (sku) => {
        navigate(`/detalle/${sku}`);
    }

    return (
        <div className='cardPerfumes'>
            <BsHeart className='favCorazon'></BsHeart>
            <div className='imgPerfumes'>
                <div onClick={() => detallePerfume(perfume.SKU)}>
                <Card.Img variant="top" style={{ width: '200px', cursor:"pointer" }} src={perfume.IMG}  />
                </div>
            </div>
            <Card.Body className='cardBody' >
                <Card.Title>{perfume.MARCA}</Card.Title>
                <Card.Text className='cardTexto'  style={{ textTransform: 'lowercase' }}>
                    {perfume.TITULO}
                </Card.Text>
                <div className='carritoPrecio'>
                    <Card.Text className='precios' >
                        ${perfume.PRECIO.toLocaleString("en")}
                    </Card.Text>
                    <Button variant="dark" className='botonCarrito py-1' ><RiShoppingCartLine className='iconoCarrito'></RiShoppingCartLine></Button>
                </div>
            </Card.Body>
        </div>
    )
}

export default CardPerfumes