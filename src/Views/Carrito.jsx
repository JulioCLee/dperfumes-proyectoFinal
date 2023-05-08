import { useStore } from '../Contexts/MyContext'
import React from 'react'
import { Button } from 'react-bootstrap';

const Carrito = () => {

  const { store, setStore } = useStore()
  const { perfumes, cart, totalPedido } = store


  const disminuirCantidad = (SKU) => {
    const idx = cart.findIndex((p) => p.SKU === SKU);
    if (idx >= 0) {
      cart[idx].cant -= 1;
      setStore({...store,cart});
    }

  }

  const aumentarCantidad = (SKU) => {
    const idx = cart.findIndex((p) => p.SKU === SKU);
    if (idx >= 0) {
      cart[idx].cant += 1;
      setStore({...store, cart});
    }

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
                  <div key={i} className='detallePedido'>
                    <div className='tittle'>
                      <h4>Producto</h4>
                      <div className='boxCaja'>
                        <img src={perfume.IMG} alt="img" />
                        <span>{perfume.MARCA}</span>
                      </div>
                    </div>
                    <div className='precioCantidad'>
                      <div className='pe-5' >
                        <h4>Sub-total</h4>
                        <span> ${perfume.PRECIO * perfume.cant}</span>
                      </div>
                    </div>
                    <div>
                      <h4>Cantidad</h4>
                      <Button className='mx-2 px-3' variant="danger" onClick={() => disminuirCantidad(perfume.SKU)}>-</Button>
                      <span>{perfume.cant}</span>
                      <Button className='mx-2 px-3' onClick={() => aumentarCantidad(perfume.SKU)} >+</Button>
                    </div>
                  </div>)
              })
            }
            <strong className='totalP'>Total pedido: ${totalPedido}</strong>
          </div>
        </div>
      }
    </div >
  )
}

export default Carrito

