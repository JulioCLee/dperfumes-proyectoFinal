import React, { useState } from 'react'
import Interface from './Interface'
import { useStore } from '../Contexts/MyContext'
import { Form, Row } from 'react-bootstrap'
import NoValido from './NoValido'

const Datos = () => {

    const { store, setStore } = useStore()
    const { conectado, } = store

    return (
        <div>
            {
                conectado.id !== null && conectado.estado ?
                    <div className='aside'>
                        <Interface></Interface>
                        <Form style={{ width: "650px", marginTop: "60px", marginLeft: "20px" }}>
                            <Row >
                                <Form.Group className='datosP' >
                                    <Form.Label style={{ width: "20%" }}>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        disabled
                                        value={conectado.nombre}
                                    />
                                </Form.Group>
                                <Form.Group className='datosP'>
                                    <Form.Label style={{ width: "20%" }}>apellido</Form.Label>
                                    <Form.Control

                                        type="text"
                                        disabled
                                        value={conectado.apellido}
                                    />
                                </Form.Group>
                                <Form.Group className='datosP'>
                                    <Form.Label style={{ width: "20%" }}>Teléfono</Form.Label>
                                    <Form.Control
                                        type="text"
                                        disabled
                                        value={conectado.telefono}
                                    />
                                </Form.Group>
                                <Form.Group className='datosP'>
                                    <Form.Label style={{ width: "20%" }}>Comuna</Form.Label>
                                    <Form.Control
                                        type="text"
                                        disabled
                                        value={conectado.comuna}
                                    />
                                </Form.Group>
                                <Form.Group className='datosP'>
                                    <Form.Label style={{ width: "20%" }}>Email</Form.Label>
                                    <Form.Control
                                        type="Email"
                                        disabled
                                        value={conectado.correo}
                                    />
                                </Form.Group>
                                <Form.Group className='datosP'>
                                    <Form.Label style={{ width: "20%" }}>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={conectado.clave}
                                        disabled
                                    />
                                </Form.Group>
                            </Row>
                        </Form>
                    </div> :
                    <NoValido></NoValido>
            }
        </div>
    )
}

export default Datos