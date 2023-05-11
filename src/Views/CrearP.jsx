import React, { useState } from 'react'
import Interface from './Interface'
import { Button, Form, Row } from 'react-bootstrap'
import { useStore } from '../Contexts/MyContext';
import { useNavigate } from 'react-router-dom';
import NoValido from './NoValido';

const CrearP = () => {

  const [titulo, setTitulo] = useState('');
  const [sku, setSku] = useState('');
  const [desc, setDesc] = useState('');
  const [marca, setMarca] = useState('');
  const [genero, setGenero] = useState('');
  const [tipo, setTipo] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState(null);
  const { store, setStore } = useStore()
  const { perfumes, conectado } = store
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const perfumesCreado = {TITULO: titulo, SKU: sku, DESC: desc, MARCA: marca, GENERO: genero, TIPO: tipo, PRECIO: precio, IMG: imagen} ;
      if (perfumesCreado) {
        setStore({ ...store, perfumes: [...perfumes, {TITULO: titulo, SKU: sku, DESC: desc, MARCA: marca, GENERO: genero, TIPO: tipo, PRECIO: precio, IMG: imagen}] })
        navigate(`/publicaciones`)
      }

    }


  };

  const handleImagenSeleccionada = (event) => {
    const archivo = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImagen(e.target.result);
    };

    reader.readAsDataURL(archivo);
  };
  return (
    <div>
      {
        conectado.id === "ad1" && conectado.estado ?
          <div className='aside'>
            <Interface></Interface>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "40px" }}>
              <h2 style={{ marginTop: "40px" }}>Crear Productos</h2>
              <div style={{ width: "80%", marginTop: "60px", display: "flex", justifyContent: "center" }}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group className='crearP' >
                      <Form.Label style={{ width: "80px" }}>Titulo:</Form.Label>
                      <Form.Control
                        className='fControl'
                        style={{ width: "40%" }}
                        type="text"
                        onChange={(e) => setTitulo(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className='crearP' >
                      <Form.Label style={{ width: "80px" }}>SKU:</Form.Label>
                      <Form.Control
                        className='fControl'
                        style={{ width: "100px" }}
                        type="text"
                        onChange={(e) => setSku(e.target.value)}

                      />
                    </Form.Group>
                    <Form.Group className='crearP' >
                      <Form.Label style={{ width: "80px", marginRight: "6px" }}>Desc:</Form.Label>
                      <Form.Control
                        className='fControl'
                        type="text"
                        as="textarea"
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className='crearP' >
                      <Form.Label style={{ width: "80px" }}>Marca:</Form.Label>
                      <Form.Control
                        className='fControl'
                        style={{ width: "300px" }}
                        type="text"
                        onChange={(e) => setMarca(e.target.value)}
                      />
                      <Form.Select style={{ marginInline: "20px", width: "200px" }}
                        onChange={(e) => setGenero(e.target.value)}
                      >
                        <option value="">Seleccione Genero</option>
                        <option value="HOMBRE">HOMBRE</option>
                        <option value="MUJER">MUJER</option>
                      </Form.Select >
                      <Form.Select style={{ width: "200px" }}
                        onChange={(e) => setTipo(e.target.value)}
                      >
                        <option value="">Seleccione Tipo</option>
                        <option value="EDT">EDT</option>
                        <option value="EDP">EDP</option>
                      </Form.Select >
                    </Form.Group>
                    <Form.Group className='crearP' >
                      <Form.Label style={{ width: "80px" }}

                      >Precio:</Form.Label>
                      <Form.Control
                        onChange={(e) => setPrecio(e.target.value)}
                        style={{ width: "100px" }}
                        className='fControl'
                        type="text"
                      />
                    </Form.Group>
                    <Form.Group className='crearP' >
                      {imagen && (
                        <img
                          src={imagen}
                          alt="Imagen cargada"
                          style={{ width: '120px', height: '120px', marginLeft: "18px" }}
                        />
                      )}
                      <Form.Control type="file" style={{ width: "auto" }} onChange={handleImagenSeleccionada} />
                    </Form.Group>
                    <div className='btnCrearP'>
                      <Button variant='dark' type="submit"
                      >Crear Producto</Button>
                    </div>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
          :
          <NoValido></NoValido>
      }
    </div>
  )
}

export default CrearP