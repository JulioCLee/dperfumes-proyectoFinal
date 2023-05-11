import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useStore } from '../Contexts/MyContext';
import { useNavigate } from 'react-router-dom';


const Registro = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [comuna, setComuna] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();
    const { store, setStore } = useStore()
    const { usuarios } = store
    const [validated, setValidated] = useState(false);
    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            setValidated(true);
            const usuarioValido = usuarios.push({nombre: nombre, email: email, clave: contraseña, apellido: apellido, telefono: telefono, comuna: comuna});
            if (usuarioValido) {
                setStore({ ...store, conectado: { estado: true, correo: email, nombre: nombre, clave: contraseña, apellido: apellido, telefono: telefono, comuna: comuna } })
                navigate(`/`)
            }
        }
    };


    return (
        <div className='boxForm'>
            <h3>Registrate en D'Perfumes</h3>
            <p>Por favor completa los datos y continúa con tu compra</p>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01" >
                        <Form.Label>Nombre*</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ingresa tu nombre"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor Ingresa un nombre
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Ingresa tu apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ingresa tu apellido"
                            onChange={(e) => setApellido(e.target.value)}

                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor Ingresa un apellido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Teléfono móvil*</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingresa tu Región" 
                        required
                        onChange={(e) => setTelefono(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu Región
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Comuna*</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Comuna" 
                        required
                        onChange={(e) => setComuna(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu Comuna
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                        type="Email"
                        placeholder="Ingresa tu Email" 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu Email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                        <Form.Label>Contraseña*</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Contraseña" 
                        required
                        onChange={(e) => setContraseña(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu Contraseña
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-6">
                    <Form.Check
                        required
                        label="Aceptas los terminos y condiciones de D'Perfumes"
                        feedback="Debe aceptar antes de enviar."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit" variant='dark' className='px-5 mt-3'>Registrarse</Button>
            </Form>
        </div>
    )
}

export default Registro