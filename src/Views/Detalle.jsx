import React, { useContext } from 'react'
import MyContext from '../Contexts/MyContext'
import { useParams } from 'react-router-dom';



const Detalle = () => {

    const { perfumes } = useContext(MyContext);    
    const { SKU } = useParams();
    const perfume = perfumes.find((p) => p.SKU === SKU);

    return (
        <div>
           <p>prueba-{SKU}</p>
           <p>{perfume.TITULO}</p>
        </div>
    )
}

export default Detalle