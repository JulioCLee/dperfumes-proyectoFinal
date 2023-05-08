
import { useStore } from "../Contexts/MyContext";
import Interface from "./Interface";
import Galeria from "../Components/Galeria";

export default function Favoritos2({ fav = false }) {

  const { store } = useStore()
  const { conectado } = store;

  return (
    <div className="favorito2">
      <Interface></Interface>
      {
        conectado !== null && conectado.estado ?
        <div className="aside2">
          <p className='tituloProducto'>Mis Favoritos</p>
          <Galeria fav={true}></Galeria>
        </div>
          :
          null
      }
    </div>
  );
}

