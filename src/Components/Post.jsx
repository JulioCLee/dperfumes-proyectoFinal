import React from 'react';
import post from '../assets/img/post.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const Post = () => {


    const navigate = useNavigate();

    const detallePerfume = () => {
        navigate(`/productos/`);
        window.scrollTo(0,0);
    }

    return (
        <div className='post'>
            <div>
                <h2>Bienvenido a D'Perfumes</h2>
                <p className='n1' >Somos los N° 1 <br /> en Perfumes</p>
                <hr />
                <p className='n2'>Todos los Perfumes, Los podras conseguir <br /> a u mejor precio del mercado</p>
                <Button  className='btnPost'  variant='dark' onClick={detallePerfume}>Ver Productos</Button>
            </div>
            <div>
                <img src={post} alt="foto" className='postPerfume' />
            </div>

        </div>
    )
}

export default Post