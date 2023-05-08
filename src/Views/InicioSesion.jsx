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

    const validarEmail = () => {
        const usuarioValido = usuarios.find((usuario) => usuario.email === email && usuario.clave === password);

        if (usuarioValido) {
            setStore({ ...store, 
            conectado: {
            estado: true,
            correo: usuarioValido.email,
            nombre: usuarioValido.nombre,
            apellido: usuarioValido.apellido,
            clave: usuarioValido.clave,
            comuna: usuarioValido.comuna,
            telefono: usuarioValido.telefono,
            id: usuarioValido.id 
        
        } })

            navigate(`/`)
        } else {
            setStore({ ...store, conectado: null })
            alert("usuario no valido");
        }
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