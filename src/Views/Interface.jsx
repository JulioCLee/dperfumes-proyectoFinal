import React from 'react'
import { useStore } from '../Contexts/MyContext';
import { NavLink } from 'react-router-dom';
import { BsCaretRightFill } from 'react-icons/bs';
import { Nav } from 'react-bootstrap';

const Interface = () => {

    const { store } = useStore();
    const { conectado } = store;
    return (
        <div className='interface'>
            <div>
                <h2>Mi Perfil</h2>
                <img src="" alt="" />
                <p>{conectado.nombre}</p>
                <hr />
                <Nav className='interLink'>
                    <div className='interLink2'>
                        <NavLink
                            style={{ textDecoration: "none", color: "black" }}
                            to="/datos">Mis Datos</NavLink>
                        <BsCaretRightFill></BsCaretRightFill>
                    </div>
                    <div className='interLink2'>
                        <NavLink
                            style={{ textDecoration: "none", color: "black" }}
                            to="/publicaciones">publicaciones</NavLink>
                        <BsCaretRightFill></BsCaretRightFill>

                    </div>
                    <div className='interLink2'>
                        <NavLink
                            style={{ textDecoration: "none", color: "black" }}
                            to="/crear-publicacion">Crear Publicacion</NavLink>
                        <BsCaretRightFill></BsCaretRightFill>

                    </div>
                </Nav>
            </div>
        </div>
    )
}

export default Interface