import React from 'react'
import { useStore } from '../Contexts/MyContext'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';



const Detalle = () => {
    const { store, setStore } = useStore()
    const { perfumes, cart } = store;
    const { SKU } = useParams();

    const perfume = perfumes.find((p) => p.SKU === SKU);

    const handleCart = (perfume) => {
        const perfumeSeleccionado = {
            SKU: perfume.SKU,
            cant: 1,
            IMG: perfume.IMG,
            PRECIO: perfume.PRECIO,
            MARCA: perfume.MARCA,
            TITULO: perfume.TITULO
        };

        const idx = cart.find((p) => p.SKU === perfume.SKU);

        if (idx) {
            cart.filter((cartItem) =>
                cartItem.SKU === perfume.SKU
                    ? { ...cartItem, cant: cartItem.cant++ }
                    : cartItem
            );
        } else {
            setStore({ ...store, cart: [...cart, perfumeSeleccionado] });
        }

    }

    return (
        <div className='detalle'>
            <div className='imgDetalle'>
                <img src={perfume.IMG} alt="img" />
            </div>
            <div className='descDetalle'>
                <h2>{perfume.TITULO}</h2>
                <hr className='hr2' />
                <p className='prcDetalle'>${perfume.PRECIO.toLocaleString("en")}</p>
                <div className='productDetalle'>
                    <h4>Detalles:</h4>
                    <p><span>SKU: </span>{SKU}</p>
                    <p><span>GENERO: </span>{perfume.GENERO}</p>
                    <p><span>TIPO: </span>{perfume.TIPO}</p>
                    <p><span>DISPONIBILIDAD:</span>{perfume.STOCK}</p>
                </div>
                <div>
                    <span>Descripcion:</span>
                    <p className='desc'>{perfume.DESC}</p>
                </div>

                <div className='footerDetalle'>
                    <Button variant="dark"  onClick={() => handleCart(perfume)} >Añadir al carrito</Button>
                    <NavLink to="/productos" style={{ textDecoration: "none", color: "black", }}> <BsArrowLeftShort></BsArrowLeftShort> Continuar Comprando</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Detalle