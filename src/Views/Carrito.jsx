import { useStore } from '../Contexts/MyContext'
import React from 'react'
import { Button } from 'react-bootstrap';
import { calculaTotalPedido } from '../utils/utils';

const Carrito = () => {

  const { store, setStore } = useStore()
  const { perfumes, cart, setCart, totalPedido, setTotalPedido } = store


  const disminuirCantidad = (SKU) => {
    const idx = cart.findIndex((p) => p.SKU === SKU);
    if (idx >= 0) {
      cart[idx].cant -= 1;
      setCart([...setCart]);
    }
    const totalPedidoActual = calculaTotalPedido(cart);
    setTotalPedido(totalPedidoActual);
  }

  const aumentarCantidad = (SKU) => {
    const idx = cart.findIndex((p) => p.SKU === SKU);
    if (idx >= 0) {
      cart[idx].cant += 1;
      setCart([...cart]);
    }
    const totalPedidoActual = calculaTotalPedido(cart);
    setTotalPedido(totalPedidoActual);
  }



  return (
    <div>
      {
        <div className='boxCarrito'>
        <h2>Detalle del Pedido</h2>
        <div>
          
          <strong className='totalP'>Total pedido: ${totalPedido}</strong>
        </div>
      </div>
      }
    </div >
  )
}

export default Carrito

