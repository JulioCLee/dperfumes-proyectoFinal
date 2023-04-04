import React, { useContext } from 'react'
import { Nav, Dropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'

import { TfiSearch } from 'react-icons/tfi';
import { RiShoppingCartLine } from 'react-icons/ri';
import MyContext from '../Contexts/MyContext';


const Barra = () => {

    const { perfumes } = useContext(MyContext);

    const marcasPerfumes = perfumes.map((p) => {
        return p.MARCA;
    })

    const marcas = new Set(marcasPerfumes);

    const marcasUnicas = [...marcas];


    return (
        <div className='barra'>
            <div className='envioGratis'>
                <p>Envio Gratis por la compra sobre $39.990</p>
            </div>
            <div className='header'>
                <NavLink to="/"><img src={logo} alt="logo" className='logo'></img></NavLink>
                <input className='input' type="text" placeholder='Buscar productos' />
                <Button variant="link" ><TfiSearch className='fs-4 me-5' style={{ color: "black" }} ></TfiSearch></Button>
                <div>
                    <Nav className='prueba'>
                        <NavLink className='lst'
                            to="/registro">Registro /</NavLink>
                        <NavLink className='lst'
                            to="/sesion">Iniciar sesión</NavLink>
                        <NavLink className='lst'
                            to="/carrito"><RiShoppingCartLine className='fs-5 ms-3'></RiShoppingCartLine></NavLink>
                    </Nav>
                </div>
            </div>
            <div>
                <ul className='m-0 pb-3 listNav'>
                    <NavLink to="/" className='lstNav' >Home</NavLink>
                    <NavLink to="/productos" className='lstNav' >Perfumes</NavLink>
                    <Dropdown className='lstNav'>
                        <Dropdown.Toggle variant="link" style={{ color: "black", textDecoration: "none" }} id="dropdown-basic">
                            Marcas
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                marcasUnicas.map((p,i) => {
                                    return <Dropdown.Item href="" key={i}>{p}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <NavLink to="/" className='lstNav' >Tipo</NavLink>
                    <NavLink to="/" className='lstNav' >Genero</NavLink>
                    <NavLink to="/" className='lstNav' >Favoritos</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Barra