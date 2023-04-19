import React from 'react'
import { useStore } from '../Contexts/MyContext'
import CardPerfumes from '../Components/CardPerfumes'
import { Col } from 'react-bootstrap'

const Carrito = () => {

  const { store, setStore } = useStore()
  const { perfumes, cart } = store

  return (
    <div>
      {
        cart && cart.map((perfume) => {
          return <Col className='p-0 m-0' key={perfume.SKU}>
            <CardPerfumes perfume={perfume}></CardPerfumes>
          </Col>
        })
      }
    </div >
  )
}

export default Carrito

