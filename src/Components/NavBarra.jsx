import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { TfiSearch } from 'react-icons/tfi';
import { RiShoppingCartLine } from 'react-icons/ri';

const NavBarra = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");
    return (
        <div className='barra'>
            <div className='envioGratis'>
                <p>Envio Gratis por la compra sobre $39.990</p>
            </div>
            <div className='header'>
                <NavLink to="/"><img src={logo} alt="logo" className='logo'  ></img></NavLink>
                <input className='input' type="text" placeholder='Buscar productos' />
                <Button variant="link" ><TfiSearch className='fs-4 me-5' style={{ color: "black" }} ></TfiSearch></Button>
                <div>
                    <Nav>
                        <NavLink className={setActiveClass}
                            to="/registro">Registro </NavLink>
                        <NavLink className={setActiveClass}
                            to="/sesion">Iniciar sesión</NavLink>
                        <NavLink className="lst"
                            to="/carrito"><RiShoppingCartLine className='fs-5 ms-2'></RiShoppingCartLine></NavLink>
                    </Nav>
                </div>
            </div>
        </div>
  )
}

export default NavBarra