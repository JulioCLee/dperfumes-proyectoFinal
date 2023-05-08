import React from 'react'
import Interface from './Interface'
import { useStore } from '../Contexts/MyContext'

const Datos = () => {

    const { store, setStore } = useStore()
    const { conectado, } = store
    console.log(conectado)
    return (
        <div className='aside'>
            <Interface></Interface>
            <p>{conectado.nombre}</p>
        </div>
    )
}

export default Datos