import { useContext } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { TfiSearch } from 'react-icons/tfi';
import { RiShoppingCartLine } from 'react-icons/ri';
import MyContext from '../Contexts/MyContext';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBarra = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");
    const { conectado, setConectado } = useContext(MyContext);
    const navigate = useNavigate();


    const cerrarApp = () =>{
        setConectado(false)
        navigate(`/`)
    }


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
                    {
                        conectado.estado ?
                            <Dropdown  >
                                <Dropdown.Toggle variant="link" style={{ color: "black", textDecoration: "none" }} id="dropdown-basic">
                                    <span>Hola, </span>
                                    {conectado.nombre}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='p-2'>
                                    <Dropdown.Item><NavLink className={setActiveClass} to="/perfil">Mi Perfil</NavLink></Dropdown.Item>
                                    <Dropdown.Item><li onClick={cerrarApp} >Cerrar sesión</li></Dropdown.Item>
                                </Dropdown.Menu>
                                <NavLink className="lst"
                                    to="/carrito"><RiShoppingCartLine className='fs-5 ms-2'></RiShoppingCartLine></NavLink>
                            </Dropdown>


                            :
                            <Nav>
                                <NavLink className={setActiveClass}
                                    to="/registro">Registro </NavLink>
                                <NavLink className={setActiveClass}
                                    to="/sesion">Iniciar sesión</NavLink>
                                <NavLink className="lst"
                                    to="/carrito"><RiShoppingCartLine className='fs-5 ms-2'></RiShoppingCartLine></NavLink>
                            </Nav>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBarra