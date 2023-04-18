import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useStore } from '../Contexts/MyContext';


const Barra = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "viewActiva" : "view");
    const { store: { perfumes } } = useStore()
    /* const { perfumes } = useContext(MyContext); */

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
                                marcasUnicas.map((p, k) => {
                                    return <Dropdown.Item key={k} >{p}</Dropdown.Item>
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
                                tipoUnicas.map((p, c) => {
                                    return <Dropdown.Item key={c} href="">{p}</Dropdown.Item>
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
                                    return <Dropdown.Item key={a} href="">{p}</Dropdown.Item>
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