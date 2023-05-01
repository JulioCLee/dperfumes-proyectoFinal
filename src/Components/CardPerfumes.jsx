import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Contexts/MyContext';
import { BsHeart } from 'react-icons/bs';
import { useState } from 'react';


const CardPerfumes = ({ perfume }) => {
    const { store, setStore } = useStore()
    const { perfumes, cart, conectado, totalPedido, setTotalPedido } = store
    const sumatotal = totalPedido + perfume.PRECIO;


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
        /*         setStore({ ...store, cart: [...cart, perfume] })
         */
        const perfumeSeleccionado = { SKU: perfume.SKU, cant: 1, IMG: perfume.IMG, PRECIO: perfume.PRECIO, MARCA: perfume.MARCA };

        const idx = cart.find((p) => p.SKU === p.SKU);
        if (idx >= 0) {
            cart[idx].cant += 1;
            setStore({ ...store, cart});
        } else {
            setStore({ ...store, cart: [...cart, perfumeSeleccionado] });
        }
    }


    const noValido = () => {
        reDireccion();
    }

    const oferta = Math.floor(perfume.PRECIO / 6);
    const pNormal = Math.floor(perfume.PRECIO * 2);

    const [showBuyButton, setShowBuyButton] = useState(false);

    return (
        <div className='cardPerfumes'
            onMouseEnter={() => setShowBuyButton(true)}
            onMouseLeave={() => setShowBuyButton(false)}>
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
            <Card.Body className='cardBody'>
                <Card.Title>{perfume.MARCA}</Card.Title>
                <Card.Text className='cardTexto' style={{ fontSize: '12px' }}>
                    {perfume.TITULO}
                </Card.Text>
                <div className='carritoPrecio'>
                    <div className='btext'>
                        <Card.Text style={{ marginBottom: "0" }}>
                            <del><span style={{ color: "grey", marginRight: "6px", fontSize: "16px" }}>${pNormal.toLocaleString("en")}</span></del>
                            <span className='precios'>${perfume.PRECIO.toLocaleString("en")}</span>
                        </Card.Text>
                        <span className='pInteres'>6 x ${oferta.toLocaleString("en")} sin interés</span>
                    </div>
                </div>
                {
                    showBuyButton && (
                        <Button
                            variant="dark" className="botonCarrito"
                            onClick={() => handleCart(perfume)}><RiShoppingCartLine className='iconoCarrito'></RiShoppingCartLine></Button>
                    )
                }

            </Card.Body>
        </div>
    )
}

export default CardPerfumes