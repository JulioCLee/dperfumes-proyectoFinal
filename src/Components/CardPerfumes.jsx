import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Contexts/MyContext';
import { BsHeart } from 'react-icons/bs';


const CardPerfumes = ({ perfume }) => {
    const { store, setStore } = useStore()
    const { perfumes, cart, setCart, totalPedido, setTotalPedido, conectado } = store

    const navigate = useNavigate();

    const detallePerfume = (sku) => {
        navigate(`/detalle/${sku}`);
    }

    const reDireccion = () => {
        navigate(`/registro`);
    }


    const setFavorito = (SKU) => {
        const fotoConClick = perfumes.findIndex((f) => f.SKU === SKU);
        perfumes[fotoConClick].liked = !perfumes[fotoConClick].liked;
        setStore({ ...store, perfumes: perfumes })
    }

    const handleCart = (perfume) => {
        setStore({ ...store, cart: [...cart, perfume], cant:1 })
    }

    const noValido = () => {
        reDireccion();
    }

    return (
        <div className='cardPerfumes'>
            <Button type='button' id='boton' onClick={() => setFavorito(perfume.SKU)} variant="light">
                {
                    conectado !== null && conectado.estado ?
                        <div>
                            <BsHeart className='favCorazon' style={{ color: perfume.liked ? "red" : "black" }}></BsHeart>
                        </div>
                        :
                        <div className='logPerfil'>
                            <BsHeart className='favCorazon' style={{ color: "black" }} onClick={() => noValido()}></BsHeart>
                        </div>
                }

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