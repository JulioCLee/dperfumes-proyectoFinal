import React from 'react'
import { useStore } from '../Contexts/MyContext';
import { NavLink } from 'react-router-dom';
import { BsCaretRightFill } from 'react-icons/bs';
import { Nav } from 'react-bootstrap';
import usuario from '../assets/img/usuario.png'
import Datos from './Datos';
import NoValido from './NoValido';

const Interface = () => {

    const { store } = useStore();
    const { conectado } = store;
    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");

    return (
        <div>
            {
                conectado !== null && conectado.estado ?
                    <div className='interface'>
                        <div>
                            <div className='perfil1'>
                                <p>Bienvenido</p>
                                <img src={usuario} alt="usuario" style={{ width: "126px", borderRadius: "50%" }} />
                                <p>{conectado.nombre}</p>
                            </div>
                            <hr />
                            <Nav className='interLink'>
                                <div className='interLink2'>
                                    <NavLink className="navLinkInterface"
                                        style={{ textDecoration: "none", color: "black" }}
                                        to="/datos">
                                        <p>Mi perfil</p>
                                        <BsCaretRightFill></BsCaretRightFill>
                                    </NavLink>
                                </div>
                                {
                                    conectado.id === "ad1" && conectado.estado ?
                                        <div>
                                            <div className='interLink2'>
                                                <NavLink className="navLinkInterface"
                                                    style={{ textDecoration: "none", color: "black" }}
                                                    to="/publicaciones">Mis publicaciones<BsCaretRightFill></BsCaretRightFill></NavLink>
                                            </div>
                                            <div className='interLink2'>
                                                <NavLink className="navLinkInterface"
                                                    style={{ textDecoration: "none", color: "black", paddingleft: "16px" }}
                                                    to="/crear-publicacion">Crear Publicacion<BsCaretRightFill></BsCaretRightFill></NavLink>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className='interLink2'>
                                                <NavLink className="navLinkInterface"
                                                    style={{ textDecoration: "none", color: "black" }}
                                                    to="/cartprivado">Mi Carrito<BsCaretRightFill></BsCaretRightFill></NavLink>
                                            </div>
                                            <div className='interLink2'>
                                                <NavLink className="navLinkInterface"
                                                    style={{ textDecoration: "none", color: "black" }}
                                                    to="/misfavoritos">Favoritos<BsCaretRightFill></BsCaretRightFill></NavLink>
                                            </div>
                                        </div>
                                }
                            </Nav>
                        </div>
                    </div> :
                    <NoValido></NoValido>

            }
        </div>
    )
}

export default Interface