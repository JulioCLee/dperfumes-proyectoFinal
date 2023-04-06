import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap';
import MyContext from '../Contexts/MyContext';
import CardPerfumes from './CardPerfumes';


const Galeria = () => {

    const { perfumes } = useContext(MyContext);

    const pagination = () => {
        return perfumes.slice(0, 16);
    }


    return (
        <div className='main'>
            <p className='tituloProducto'>Productos Destacados</p>           
            <Row xl={4} className="cardRow" >
                {
                    pagination()
                    .map((perfume) => {
                        return <Col className='p-0 m-0' key={perfume.SKU}>
                            <CardPerfumes perfume={perfume}></CardPerfumes>
                        </Col>
                    })
                }
            </Row>
        </div>
    )
}

export default Galeria