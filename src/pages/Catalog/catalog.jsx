/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CatalogCard from '../../components/catalog-card';
import Navbar from '../../components/navbar';
import ScrollToTop from '../../components/scrollToTop';
import Footer from '../../components/footer';
import './catalog.css';

function Catalog({ itemArray, updateItemInCart, count }) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const totalPages = Math.ceil(itemArray.length / 12);

  useEffect(() => {
    const startIndex = (page * 12) - 12;
    const endIndex = page * 12;
    const paginatedItems = itemArray.slice(startIndex, endIndex);
    setItems(paginatedItems);

    const pageNumbers = document.querySelectorAll('.catalog-circle p');
    pageNumbers.forEach(pageNumber => {
      if (parseInt(pageNumber.textContent, 10) === page) {
        pageNumber.parentElement.classList.add('highlighted');
      } else {
        pageNumber.parentElement.classList.remove('highlighted');
      }
    });

  }, [itemArray, page]);

  const handleNextPage = () => setPage(prevPage => Math.min(prevPage + 1, totalPages));
  const handlePrevPage = () => setPage(prevPage => Math.max(prevPage - 1, 1));

  return (
    <div id='catalog-container'>
      <ScrollToTop /> 
      <Navbar count={count} />
      <div id='catalog-placeholder'>Hello</div>
      <div id="catalog-div">
        <div id="catalog-grid-div">
          {items.map((item, index) => (
            <CatalogCard 
              key={index}
              imgSrc={item.imgSrc}
              shoeName={item.name}
              price={item.price}
              brand={item.brand}
              addItemtoCart={() => updateItemInCart(item.name)}
            />
          ))}
        </div>
        <div id='catalog-selector'> 
          <div className='catalog-square' onClick={handlePrevPage}><p>PREV</p></div>
          <div className='catalog-square' onClick={handleNextPage}><p>NEXT</p></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;
