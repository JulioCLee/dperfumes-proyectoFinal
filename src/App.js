import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './Views/Home';
import Carrito from './Views/Carrito';
import Detalle from './Views/Detalle';
import Barra from './Components/Barra';
import Productos from './Views/Productos';
import Registro from './Views/Registro';
import InicioSesion from './Views/InicioSesion';
import Footer from './Components/Footer';
import NavBarra from './Components/NavBarra';
import Favoritos from './Views/Favoritos';
import AppProvider from './Contexts/MyContext';
import Perfil from './Components/Perfil';
import NoValido from './Views/NoValido';
import Datos from './Views/Datos';
import Publicaciones from './Views/Publicaciones';
import CrearP from './Views/CrearP';



function App() {

  const [storeGlobal, setStoreGlobal] = useState({
    perfumes: [],
    sortCritieria: { MARCAS: [], GENERO: [] },
    searchTerms: "",
    usuarios: "",
    conectado: {},
    cart: [],
    totalPedido: 0,
    setTotalPedido: 0,
  });

  return (
    <AppProvider storeGlobal={storeGlobal}>
      <BrowserRouter>
        <NavBarra></NavBarra>
        <Barra></Barra>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/marca/:name" element={<Productos></Productos>}></Route>
          <Route path="/genero/:genero" element={<Productos></Productos>}></Route>
          <Route path="/carrito" element={<Carrito></Carrito>}></Route>
          <Route path="/detalle/:SKU" element={<Detalle></Detalle>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/registro" element={<Registro></Registro>}></Route>
          <Route path="/sesion" element={<InicioSesion></InicioSesion>}></Route>
          <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
          <Route path="/perfil" element={<Perfil></Perfil>}></Route>
          <Route path="/datos" element={<Datos></Datos>}></Route>
          <Route path="/publicaciones" element={<Publicaciones></Publicaciones>}></Route>
          <Route path="/crear-publicacion" element={<CrearP></CrearP>}></Route>
          <Route path="*" element={<NoValido></NoValido>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </AppProvider>
  );
}

export default App;
