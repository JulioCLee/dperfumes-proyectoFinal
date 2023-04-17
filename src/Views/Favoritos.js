import CardPerfumes from "../Components/CardPerfumes";
import Galeria from "../Components/Galeria";
import Home from "./Home";

export default function Favoritos() {

  return (
    <div className="favorito">
      <p className='tituloProducto'>Productos Favoritos</p>
      <Galeria fav={true}></Galeria>
    </div>
  );
}

