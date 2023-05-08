import React from 'react'
import { useStore } from '../Contexts/MyContext'
import NoValido from '../Views/NoValido'
import Interface from '../Views/Interface'

const Perfil = () => {

  const { store } = useStore()
  const { conectado } = store

  return (
    <div>
       {
        conectado !== null && conectado.estado ?
        <Interface></Interface>
        :
        <div className='logPerfil'>
          <NoValido></NoValido>
        </div>
       }
    </div>
  )
}

export default Perfil