import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InicioSesion = () => {
    return (
            <div className='boxForm'>
                <h3>Ingresa a su cuenta</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Dirección de correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Iniciar sesión
                    </Button>
                </Form>
            </div>
    )
}

export default InicioSesion