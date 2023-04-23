import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Contexts/MyContext';

const InicioSesion = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { store, setStore } = useStore()
    const { usuarios } = store;
    const navigate = useNavigate();

    console.log(usuarios);

    const validarEmail = () => {
        const usuarioValido = usuarios.find((usuario) => usuario.email === email && usuario.clave === password);

        if (usuarioValido) {
            setStore({ ...store, conectado: { estado: true, correo: usuarioValido.email, nombre: usuarioValido.nombre } })
            navigate(`/`)
        } else {
            setStore({ ...store, conectado: null })
            alert("usuario no valido");
        }
        console.log(store)
    }
    
    return (
        <div className='boxForm'>
            <h3>Ingresa a su cuenta</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dirección de correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="dark" type="button" onClick={() => validarEmail()}>
                    Iniciar sesión
                </Button>
            </Form>
        </div>
    )
}

export default InicioSesion