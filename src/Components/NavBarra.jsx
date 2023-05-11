import React from 'react'
import { Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { RiShoppingCartLine } from 'react-icons/ri';
import { useStore } from '../Contexts/MyContext';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBarra = () => {
    const { store, setStore } = useStore();
    const { conectado, searchTerms, totalPedidosActual } = store;   
    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");

    const handleSearch = (e) => {
        let a = e.target.value;
        setStore({ ...store, searchTerms: a })
    }

    const navigate = useNavigate();


    const cerrarApp = () => {
        setStore({ ...store, conectado: false })
        navigate(`/`)
    }

    return (
        <div className='barra'>
            <div className='envioGratis'>
                <p>Envio Gratis por la compra sobre $39.990</p>
            </div>
            <div className='header'>
                <NavLink to="/"><img src={logo} alt="logo" className='logo'  ></img></NavLink>
                <input className='input' type="text" placeholder='Buscar productos' value={searchTerms} onChange={handleSearch} />
                <div>
                    {
                        conectado !== null && conectado.estado ?
                            <Dropdown  >
                                <Dropdown.Toggle variant="link" style={{ color: "black", textDecoration: "none" }} id="dropdown-basic">
                                    <span>Hola, </span>
                                    {conectado.nombre}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='p-2'>
                                    <Dropdown.Item><NavLink className={setActiveClass} to="/datos"> Mi Perfil</NavLink></Dropdown.Item>
                                    <Dropdown.Item><li onClick={cerrarApp} >Cerrar sesión</li></Dropdown.Item>
                                </Dropdown.Menu>
                                <NavLink className="lst"
                                    to="/carrito"><RiShoppingCartLine className='fs-5'></RiShoppingCartLine><span>${totalPedidosActual.toLocaleString("en")}</span></NavLink>
                            </Dropdown>
                            :
                            <Nav>
                                <NavLink className={setActiveClass}
                                    to="/registro">Registro </NavLink>
                                <NavLink className={setActiveClass}
                                    to="/sesion">Iniciar sesión</NavLink>
                                <NavLink className="lst" style={{display:"flex", alignItems:"center"}}
                                    to="/carrito"><RiShoppingCartLine className='fs-5'></RiShoppingCartLine><span>${totalPedidosActual.toLocaleString("en")}</span></NavLink>
                            </Nav>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBarra