import Galeria from "../Components/Galeria";
import { useStore } from "../Contexts/MyContext";

export default function Favoritos() {

  const { store } = useStore()
  const { conectado } = store;

  return (
    <div className="favorito">
      <p className='tituloProducto'>Productos Favoritos</p>
      {
        conectado !== null && conectado.estado ?
          <div>
          <Galeria fav={true}></Galeria>
          </div>
          :
          null
      }
    </div>
  );
}

