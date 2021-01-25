import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    numberOfRows: [],
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  // Function to check how many divs
  iterationFunction(x) {
    let numberOfIteration = Math.floor(x.length / 8);
    for (let i = 0; i <= numberOfIteration; i++) {
      this.state.numberOfRows.push({ id: i });
    }
    return this.state.numberOfRows;
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    /// Amount of Product on page
    const amountProduct = 8;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          {categoryProducts.length <= 8 ? (
            <div className='row' key={uuidv4()}>
              {categoryProducts
                .slice(activePage * amountProduct, (activePage + 1) * amountProduct)
                .map(item => (
                  <div key={item.id} className='col-3'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          ) : (
            <Swipeable
              onLeftAction={() => this.handlePageChange(activePage - 1)}
              onRightAction={() => this.handlePageChange(activePage + 1)}
              enableMouseEvents
            >
              {this.iterationFunction(categoryProducts).map(item => {
                return (
                  <div className='row' key={uuidv4()}>
                    {categoryProducts
                      .slice(
                        activePage * amountProduct,
                        (activePage + 1) * amountProduct
                      )
                      .map(item => (
                        <div key={uuidv4()} className='col-3'>
                          <ProductBox {...item} />
                        </div>
                      ))}
                  </div>
                );
              })}
            </Swipeable>
          )}
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
