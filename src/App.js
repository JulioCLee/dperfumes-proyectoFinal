import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Views/Home';
import Carrito from './Views/Carrito';
import Detalle from './Views/Detalle';
import Barra from './Components/Barra';
import Productos from './Views/Productos';
import { useEffect, useState } from 'react';
import MyContext from './Contexts/MyContext';
import Registro from './Views/Registro';
import InicioSesion from './Views/InicioSesion';
import Footer from './Components/Footer';

function App() {

  const [perfumes, setPerfumes] = useState([]);



  const getPerfumes = async () => {
    const res = await fetch(window.location.origin+`/perfumes.json`);
    const data = await res.json();

    setPerfumes(data)

  }

  useEffect(() => {
    getPerfumes();
  }, [])


  return (
    <MyContext.Provider value={{ perfumes }}>
      <BrowserRouter >
        <Barra></Barra>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/carrito" element={<Carrito></Carrito>}></Route>
          <Route path="/detalle/:SKU" element={<Detalle></Detalle>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/registro" element={<Registro></Registro>}></Route>
          <Route path="/sesion" element={<InicioSesion></InicioSesion>}></Route>
        </Routes>
      </BrowserRouter>
        <Footer></Footer>
    </MyContext.Provider>
  );
}

export default App;
