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
import NavBarra from './Components/NavBarra';
import Favoritos from './Views/Favoritos';
import AppProvider from './Contexts/MyContext';

function App() {

  const [perfumes, setPerfumes] = useState([]);
  const estadoGlobal = { perfumes, setPerfumes };

  const usuarios = [
    {
      email: 'admin@gmail.com',
      clave: 123456789,
    },
    {
      email: 'invitado@gmail.com',
      clave: 789456123,
    }
  ]

  const getPerfumes = async () => {
    const res = await fetch(window.location.origin + `/perfumes.json`);
    const data = await res.json();

    setPerfumes(data)

  }

  useEffect(() => {
    getPerfumes();
  }, [])


  return (
    <AppProvider data={"asd"}>
      <BrowserRouter>
        <NavBarra></NavBarra>
        <Barra></Barra>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/carrito" element={<Carrito></Carrito>}></Route>
          <Route path="/detalle/:SKU" element={<Detalle></Detalle>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/registro" element={<Registro></Registro>}></Route>
          <Route path="/sesion" element={<InicioSesion></InicioSesion>}></Route>
          <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </AppProvider>
  );
}

export default App;
