import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ProductBox from '../ProductBox/ProductBox';

function filteredItems(categoryProducts, activePage, item, amountProduct) {
  if (categoryProducts.length <= amountProduct) {
    // Divs without swipeablecategoryProducts
    return categoryProducts.slice(
      activePage * amountProduct,
      (activePage + 1) * amountProduct
    );
  } else {
    // Divs with swipeable
    return categoryProducts.slice(
      activePage === 0
        ? activePage + item.id * amountProduct
        : activePage * item.id * amountProduct,
      activePage === 0
        ? (activePage + item.id + 1) * amountProduct
        : (activePage * item.id + 1) * amountProduct
    );
  }
}

function ProductContainer({ categoryProducts, activePage, item, amountProduct }) {
  return (
    <div className='row' key={uuidv4()}>
      {filteredItems(categoryProducts, activePage, item, amountProduct).map(item => (
        <div key={uuidv4()} className='col-3'>
          <ProductBox {...item} />
        </div>
      ))}
    </div>
  );
}

ProductContainer.propTypes = {
  categoryProducts: PropTypes.object,
  activePage: PropTypes.number,
  amountProduct: PropTypes.number,
  item: PropTypes.number,
};

export default ProductContainer;
