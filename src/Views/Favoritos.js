
import Galeria from "../Components/Galeria";

export default function Favoritos() {

  return (
    <div className="favorito">
      <p className='tituloProducto'>Productos Favoritos</p>
      <Galeria fav={true}></Galeria>
    </div>
  );
}

