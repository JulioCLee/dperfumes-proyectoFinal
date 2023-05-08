import React, { useState } from 'react'
import Interface from './Interface'
import { useStore } from '../Contexts/MyContext'
import ListaPublicaciones from '../Components/ListaPublicaciones'
import ReactPaginate from 'react-paginate';

const Publicaciones = () => {
    const { store } = useStore()
    const { perfumes } = store
    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 19;
    const pagesVisited = pageNumber * itemsPerPage;

    const displayPerfumes = perfumes
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((perfume, i) => {
      return <ListaPublicaciones perfume={perfume} key={i} />;
    });

  const pageCount = Math.ceil(perfumes.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


    return (
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
      </div>
    )
}

export default Publicaciones