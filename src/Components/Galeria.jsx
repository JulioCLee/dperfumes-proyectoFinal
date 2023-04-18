import React from 'react'
import { Col, Row } from 'react-bootstrap';
import  { useStore } from '../Contexts/MyContext';
import CardPerfumes from './CardPerfumes';

const Galeria = ({ fav = false }) => {
    const { store } = useStore()
    const { perfumes, searchTerms } = store
    console.log(searchTerms);
    /*     const { perfumes } = useContext(MyContext);
     */
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