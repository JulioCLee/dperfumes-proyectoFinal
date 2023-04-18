import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Contexts/MyContext';
import { BsHeart } from 'react-icons/bs';



const CardPerfumes = ({ perfume }) => {
    const { store, setStore } = useStore()
    const { perfumes, cart } = store
/*     const { perfumes, setPerfumes } = useContext(MyContext);
 */    const navigate = useNavigate();

    const detallePerfume = (sku) => {
        navigate(`/detalle/${sku}`);
    }

    const setFavorito = (SKU) => {
        const fotoConClick = perfumes.findIndex((f) => f.SKU === SKU);
        perfumes[fotoConClick].liked = !perfumes[fotoConClick].liked;
        setStore({ ...store, perfumes: perfumes })
        /*   setPerfumes([...perfumes]) */
    }

    const handleCart = (perfume) => {
        setStore({ ...store, cart: [...cart, perfume] })
        console.log(cart);
    }

    return (
        <div className='cardPerfumes'>
            <Button type='button' id='boton' onClick={() => setFavorito(perfume.SKU)} variant="light">
                <BsHeart className='favCorazon' style={{ color: perfume.liked ? "red" : "black" }}></BsHeart>
            </Button>
            <div className='imgPerfumes'>
                <div onClick={() => detallePerfume(perfume.SKU)}>
                    <Card.Img variant="top" style={{ width: '200px', cursor: "pointer" }} src={perfume.IMG} />
                </div>
            </div>
            <Card.Body className='cardBody' >
                <Card.Title>{perfume.MARCA}</Card.Title>
                <Card.Text className='cardTexto' style={{ textTransform: 'lowercase' }}>
                    {perfume.TITULO}
                </Card.Text>
                <div className='carritoPrecio'>
                    <Card.Text className='precios' >
                        ${perfume.PRECIO.toLocaleString("en")}
                    </Card.Text>
                    <Button variant="dark" className='botonCarrito py-1' onClick={() => handleCart(perfume)}><RiShoppingCartLine className='iconoCarrito'></RiShoppingCartLine></Button>
                </div>
            </Card.Body>
        </div>
    )
}

export default CardPerfumes