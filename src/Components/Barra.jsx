import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../Contexts/MyContext';

const Barra = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");
    const { store} = useStore()
    const { perfumes, conectado } = store
    const navigate = useNavigate();

    const handleFilter = (p) => {
        navigate(`/marca/${p}`);
    }

    const handleFilterDos = (p) => {
        navigate(`/genero/${p}`);
    }

    const marcasPerfumes = perfumes.map((p) => {
        return p.MARCA;
    })

    const generoPerfumes = perfumes.map((p) => {
        return p.GENERO;
    })
    
    //marcas//
    const marcas = new Set(marcasPerfumes);

    const marcasUnicas = [...marcas];

    // genero //
    const genero = new Set(generoPerfumes);

    const generoUnicas = [...genero];

    return (
        <div className='barra'>

            <div>
                <ul className='m-0 pb-3 listNav'>
                    <li><NavLink to="/" className={setActiveClass}>Home</NavLink></li>
                    <li><NavLink to="/productos" className={setActiveClass}>Perfumes</NavLink></li>
                    {
                        conectado !== null && conectado.estado ?
                        <div>
                          <li><NavLink to="/favoritos" className={setActiveClass}>Favoritos</NavLink></li>
                        </div>
                        :
                        null
                    }
                    
                    <Dropdown  >
                        <Dropdown.Toggle variant="link" style={{ color: "black", textDecoration: "none" }} id="dropdown-basic">
                            Marcas
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                marcasUnicas.map((p, k) => {
                                    return <Dropdown.Item onClick={() => handleFilter(p)} key={`${p}-${k}`}>{p}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='lstNav'>
                        <Dropdown.Toggle variant="link" style={{ color: "black", textDecoration: "none" }} id="dropdown-basic">
                            Genero
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                generoUnicas.map((p, a) => {
                                    return <Dropdown.Item onClick={() => handleFilterDos(p)} key={`${p}-${a}`}>{p}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </div>
        </div>
    )
}

export default Barra