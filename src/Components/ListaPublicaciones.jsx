import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Contexts/MyContext';

const ListaPublicaciones = ({ perfume, setBtnEliminar }) => {

    const { store } = useStore()
    const { perfumes } = store;

    const navigate = useNavigate();

    const detallePerfume = (sku) => {
        navigate(`/detalle/${sku}`);
    }

    // const btnEliminar= (SKU) => {
    //     return perfumes.filter((item) => item.SKU !== SKU)
    // }

    return (
        <div className='boxPub'>
            <table style={{margin:"4px"}}>
                <tr className='thead'>
                        <th></th>
                        <th style={{width:"180px"}}>Sku</th>
                        <th style={{width:"700px"}}>Título</th>
                        <th>Tipo</th>
                        <th>Genero</th>
                        <th>Precio</th>
                        <th></th>
                        <th></th>
                </tr>
                <tr className='tbody'>
                        <td><img src={perfume.IMG} alt="img" style={{width:"60px", display:"flex", justifyContent:"center"}} /></td>
                        <td>{perfume.SKU}</td>
                        <td>{perfume.TITULO}</td>
                        <td>{perfume.TIPO}</td>
                        <td>{perfume.GENERO}</td>
                        <td>${perfume.PRECIO.toLocaleString("en")}</td>
                        <td onClick={() => detallePerfume(perfume.SKU)}> <Button variant='dark' style={{width:"120px"}}>Ver producto</Button></td>
                        <td> <Button variant='dark'style={{width:"100px"}}>Editar</Button></td>
                        <td> <Button variant='danger'style={{width:"100px"}} onClick={() => setBtnEliminar(perfume.SKU)}>Eliminar</Button></td>
                </tr>
            </table>
        </div>
    )
}

export default ListaPublicaciones