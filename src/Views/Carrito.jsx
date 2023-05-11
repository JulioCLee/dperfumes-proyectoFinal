import { useStore } from '../Contexts/MyContext'
import React from 'react'
import { Button } from 'react-bootstrap';
import { calculaTotalPedido } from '../utils/utils';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';


const Carrito = () => {

  const { store, setStore } = useStore()
  const { cart, totalPedidosActual } = store

  const disminuirCantidad = (SKU) => {
    const idx = cart.findIndex((p) => p.SKU === SKU);
    if (idx >= 0) {
      if (cart[idx].cant === 1) {
        // Si la cantidad del producto es 1, se elimina del carrito
        cart.splice(idx, 1);
      } else {
        // De lo contrario, se reduce la cantidad del producto en 1
        cart[idx].cant -= 1;
      }
      setStore({ ...store, cart });
    }
    const totalPedidosActual = calculaTotalPedido(cart);
    setStore({ ...store, totalPedidosActual });

  }

  const aumentarCantidad = (SKU) => {
    const idx = cart.findIndex((p) => p.SKU === SKU);
    if (idx >= 0) {
      cart[idx].cant += 1;
      setStore({ ...store, cart });
    }
    const totalPedidosActual = calculaTotalPedido(cart);
    setStore({ ...store, totalPedidosActual });
  }




  return (
    <div>
      {
        <div className='boxCarrito'>
          <h2>Detalle del Pedido</h2>
          <div>
            {
              cart && cart.map((perfume, i) => {
                return (
                  <div key={i} >
                    <div className='detallePedido'>
                      <img src={perfume.IMG} alt="img" style={{ borderRight: "1px solid #cececece" }} />
                      <div className='tittle'>
                        <h4>Producto</h4>
                        <span style={{ fontSize: "16px", width: "400px" }}>{perfume.TITULO}</span>
                      </div>
                      <div className='precioCantidad'>
                        <div className='pe-5' >
                          <h4>Sub-total</h4>
                          <span> ${(perfume.PRECIO * perfume.cant).toLocaleString("en")}</span>
                        </div>
                      </div>
                      <div className='flexButtons'>
                        <div >
                          <h4>Cantidad</h4>
                          <Button className='m-2 px-3' variant="secondary" onClick={() => disminuirCantidad(perfume.SKU)}>-</Button>
                          <span>{perfume.cant}</span>
                          <Button className='mx-2 px-3' variant="secondary" onClick={() => aumentarCantidad(perfume.SKU)} >+</Button>
                        </div>
                      </div>
                    </div>
                  </div>)
              })
            }
            <div className='footerCarrito'>
              <strong className='totalP'>Total pedido: ${totalPedidosActual.toLocaleString("en")}</strong>
              <NavLink to="/productos" style={{ textDecoration: "none", color: "black", }}> <BsArrowLeftShort></BsArrowLeftShort> Continuar Comprando</NavLink>
            </div>
          </div>
        </div>
      }
    </div >
  )
}

export default Carrito

