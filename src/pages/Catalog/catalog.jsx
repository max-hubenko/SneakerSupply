/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import CatalogCard from '../../components/catalog-card'
import Navbar from '../../components/navbar'
import ScrollToTop from '../../components/scrollToTop'
import './catalog.css'
import Footer from '../../components/footer/index.jsx'

function Catalog({itemArray, updateItemInCart}) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  // eslint-disable-next-line react/prop-types
  const totalPages = Math.ceil(itemArray.length / 12);

  useEffect(() => {
    const startIndex = (page * 12) - 12;
    const endIndex = page * 12;
    // eslint-disable-next-line react/prop-types
    const paginatedItems = itemArray.slice(startIndex, endIndex);
    setItems(paginatedItems);

    // Handle the highlighting
    const pageNumbers = document.querySelectorAll('.catalog-circle p');
    pageNumbers.forEach(pageNumber => {
      if (parseInt(pageNumber.textContent, 10) === page) {
        pageNumber.parentElement.classList.add('highlighted');
      } else {
        pageNumber.parentElement.classList.remove('highlighted');
      }
    });

  }, [itemArray, page]);

  const handleNextPage = () => setPage(prevPage => Math.min((prevPage + 1), totalPages));
  const handlePrevPage = () => setPage(prevPage => Math.max(prevPage - 1, 1));
  const handlePageSelect = (event) => {
    const pageValue = parseInt(event.currentTarget.querySelector('p').textContent, 10);
    setPage(pageValue);
  };

  
  return (
    <div id='catalog-container'>
        <ScrollToTop /> 
        <Navbar/>
        <div id="catalog-div">
          <div id="catalog-grid-div">
            {items.map((item, index) => (
                    <CatalogCard 
                        key={index}
                        imgSrc={item.imgSrc}
                        shoeName={item.name}
                        price={item.price}
                        brand={item.brand}
                        handleClick={() => updateItemInCart(item.name)}
                    />
                ))}
          </div>
          <div id='catalog-selector'> 
            <div className='catalog-square' onClick={handlePrevPage}> <p>PREV</p> </div>
            <div className='catalog-circle' onClick={handlePageSelect}><p>1</p></div>
            <div className='catalog-circle' onClick={handlePageSelect}><p>2</p></div>
            <div className='catalog-circle' onClick={handlePageSelect}><p>3</p></div>
            <div className='catalog-circle' onClick={handlePageSelect}><p>4</p></div>
            <div className='catalog-square' onClick={handleNextPage}><p>NEXT</p></div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Catalog
