import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useStore } from '../Contexts/MyContext';
import CardPerfumes from './CardPerfumes';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Galeria = ({ fav = false }) => {
    const { store } = useStore();
    const { perfumes, searchTerms } = store;
    const { name, genero } = useParams();
    const pathname = window.location.pathname;
    const [currentPage, setCurrentPage] = useState(0);

    const sortBy = () => {
        let result;
        if (pathname?.includes('/marca/') && name) {
            result = name;
        } else if (pathname?.includes('/genero/') && genero) {
            result = genero;
        }
        return result;
    };

    const pagination = () => {
        return perfumes.slice(currentPage * 16, (currentPage + 1) * 16);
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="main">
            <div>


                <Row className="cardRow">
                    {pagination()
                        .filter((perfume) => {
                            if (fav) {
                                return perfume.liked ? perfume : false;
                            } else {
                                return perfume;
                            }
                        })
                        .filter((perfume) => {
                            return perfume && perfume.TITULO.toLowerCase().includes(searchTerms.toLowerCase());
                        })
                        .filter((perfume) => {
                            if (sortBy()) {
                                return perfume.MARCA === sortBy();
                            } else if (genero) {
                                return perfume.GENERO === sortBy();
                            } else {
                                return perfume;
                            }
                        })
                        .map((perfume) => {
                            return (
                                <Col className="p-0 m-0" key={perfume.SKU}>
                                    <CardPerfumes perfume={perfume}></CardPerfumes>
                                </Col>
                            );
                        })}
                </Row>
            </div>
            <div>
                <ReactPaginate className='pPagination'
                    previousLabel={'Anterior'}
                    nextLabel={'Siguiente'}
                    pageCount={Math.ceil(perfumes.length / 16)}
                    onPageChange={handlePageClick}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div>
        </div>
    );
};

export default Galeria;