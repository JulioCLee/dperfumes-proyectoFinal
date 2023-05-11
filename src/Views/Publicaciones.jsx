import React, { useEffect, useState } from 'react'
import Interface from './Interface'
import { useStore } from '../Contexts/MyContext'
import ListaPublicaciones from '../Components/ListaPublicaciones'
import ReactPaginate from 'react-paginate';
import NoValido from './NoValido';

const Publicaciones = () => {
    const { store, setStore } = useStore()
    const [btnEliminar, setBtnEliminar] = useState('')
    const { perfumes, conectado } = store
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 19;
    const pagesVisited = pageNumber * itemsPerPage;

    const displayPerfumes = perfumes
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((perfume, i) => {
            return <ListaPublicaciones setBtnEliminar={setBtnEliminar} perfume={perfume} key={i} />;
        });

    const pageCount = Math.ceil(perfumes.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const btnDelete = (SKU) => {
        const newPerfumes = [...perfumes];
        const index = newPerfumes.findIndex((item) => item.SKU === SKU);
        newPerfumes.splice(index, 1);
        setStore((prevState) => ({ ...prevState, perfumes: newPerfumes }));
      };


    useEffect(() => {
        btnDelete(btnEliminar)
    }, [btnEliminar])
    

    return (
        <div>
            {
                conectado.id === "ad1" && conectado.estado ?
                    <div className='aside'>
                        <Interface></Interface>
                        <div className='lstPublicaciones'>{displayPerfumes}
                            <ReactPaginate className='pPagination'
                                previousLabel={'Anterior'}
                                nextLabel={'Siguiente'}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={'paginationBttns'}
                                previousLinkClassName={'previousBttn'}
                                nextLinkClassName={'nextBttn'}
                                disabledClassName={'paginationDisabled'}
                                activeClassName={'paginationActive'}
                            /></div>
                    </div> :
                    <NoValido></NoValido>
            }
        </div>
    )
}

export default Publicaciones