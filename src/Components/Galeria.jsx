import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useStore } from '../Contexts/MyContext';
import CardPerfumes from './CardPerfumes';
import { useParams } from 'react-router-dom';

const Galeria = ({ fav = false }) => {
    const { store } = useStore()
    const { perfumes, searchTerms } = store
    const { name, genero } = useParams();
    const pathname = window.location.pathname


    const sortBy = () => {
        let result = ""
        if (pathname?.includes('/marca/') && name) {
            result = name
        }
        if (pathname?.includes('/genero/') && genero) {
            result = genero;
        }
        return result
    }

    const pagination = () => {
        return perfumes.slice(0, 16);
    }

    return (
        <div className='main'>
            <Row className="cardRow" >
                {
                    pagination().filter((perfume) => {
                        if (fav) {
                            return perfume.liked ? perfume : null;
                        } else {
                            return perfume;
                        }
                    }).filter((perfume) => {
                        return perfume && perfume.TITULO.toLowerCase().includes(searchTerms.toLowerCase())
                    }).filter((perfume) => {
                        if (sortBy()) {
                            return perfume.MARCA == sortBy()
                        } if (sortBy()) {
                            return perfume.GENERO == sortBy()
                        }                        
                        else {
                            return perfume
                        }
                       
                    }).map((perfume) => {
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