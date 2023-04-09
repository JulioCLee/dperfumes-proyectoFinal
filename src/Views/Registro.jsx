import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Registro = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='boxForm'>
            <h3>Registrate en D'Perfumes</h3>
            <p>Por favor completa los datos y continúa con tu compra</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nombre*</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ingresa tu nombre"
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
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor Ingresa un apellido
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Teléfono móvil*</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu Región" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu Región
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Comuna*</Form.Label>
                        <Form.Control type="text" placeholder="Comuna" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu Comuna
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="Email" placeholder="Ingresa tu Email" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu Email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Contraseña*</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu Contraseña
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label>Fecha de nacimiento*</Form.Label>
                        <Form.Control type="password" placeholder="DD/MM/YYYY" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu fecha de nacimiento
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