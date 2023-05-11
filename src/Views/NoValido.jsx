import React from 'react'
import logo2 from '../assets/img/logo2.png'
import novalido from '../assets/img/novalido.jpg'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NoValido = () => {
  return (
    <div className='noValidoLogo'>
      <div>
        <img src={novalido} style={{width:"700px"}} alt="novalido" />
        <div>
        <Button variant='dark'><NavLink style={{color:"white", textDecoration:"none"}} to="/">Ir a Ofertas</NavLink></Button>
        </div>
        </div>
    </div>
  )
}

export default NoValido