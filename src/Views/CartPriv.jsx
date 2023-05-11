import React from 'react'
import Carrito from './Carrito'
import Interface from './Interface'
import { useStore } from '../Contexts/MyContext'
import NoValido from './NoValido'

const CartPriv = () => {

    const { store } = useStore()
    const { conectado } = store;
    return (
        <div>
            {
                conectado.id !== null && conectado.estado ?
                    <div className='aside'>
                        <Interface></Interface>
                        <Carrito></Carrito>
                    </div> :
                    <NoValido></NoValido>
            }
        </div>
    )
}

export default CartPriv