import React, { useContext , useState } from 'react'
import { Nav, Dropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { TfiSearch } from 'react-icons/tfi';
import { RiShoppingCartLine } from 'react-icons/ri';
import MyContext from '../Contexts/MyContext';


const Barra = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");

    const { perfumes } = useContext(MyContext);

    const marcasPerfumes = perfumes.map((p) => {
        return p.MARCA;
    })
    const tipoPerfumes = perfumes.map((p) => {
        return p.TIPO;
    })
    const generoPerfumes = perfumes.map((p) => {
        return p.GENERO;
    })
    //marcas//
    const marcas = new Set(marcasPerfumes);

    const marcasUnicas = [...marcas];

    //tipo //
    const tipo = new Set(tipoPerfumes);

    const tipoUnicas = [...tipo];

    // genero //
    const genero = new Set(generoPerfumes);

    const generoUnicas = [...genero];


    return (
        <div className='barra'>
           
            <div>
                <ul className='m-0 pb-3 listNav'>
                    <li><NavLink to="/" className={setActiveClass}>Home</NavLink></li>
                    <li><NavLink to="/productos" className={setActiveClass}>Perfumes</NavLink></li>
                    <li><NavLink to="/favoritos" className={setActiveClass}>Favoritos</NavLink></li>
                    <Dropdown  >
                        <Dropdown.Toggle variant="link" style={{ color: "black", textDecoration: "none" }} id="dropdown-basic">
                            Marcas
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                marcasUnicas.map((p) => {
                                    return <Dropdown.Item key={p} >{p}</Dropdown.Item>
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="link" style={{ color: "black", textDecoration: "none" }} id="dropdown-basic">
                            Tipo
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                tipoUnicas.map((p) => {
                                    return <Dropdown.Item href="">{p}</Dropdown.Item>
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
                                generoUnicas.map((p) => {
                                    return <Dropdown.Item href="">{p}</Dropdown.Item>
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