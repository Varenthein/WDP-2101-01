import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductContainer from '../../common/ProductContainer/ProductContainer';

import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    numberOfRows: [],
    visible: false,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
    this.setState({ numberOfRows: [] });
    this.setState({ activePage: 0, visible: false });
  }

  // Function to check how many divs
  iterationFunction(x, amountOfProduct) {
    let numberOfIteration = Math.floor(x.length / amountOfProduct);
    for (let i = 0; i <= numberOfIteration; i++) {
      this.state.numberOfRows.push({ id: i });
    }
    return this.state.numberOfRows;
  }

  // Reparing div
  filteredItems(categoryProducts, activePage, item, amountProduct) {
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

  render() {
    const { categories, products, deviceType } = this.props;
    const { activeCategory, activePage } = this.state;

    /// Amount of Product on page
    const amountProduct = 8;

    const categoryProducts = products.filter(item => item.category === activeCategory);

    let furniturePerPage;
    if (deviceType === 'mobile') {
      furniturePerPage = 1;
    } else if (deviceType === 'tablet') {
      furniturePerPage = 3;
    } else if (deviceType === 'desktop') {
      furniturePerPage = 8;
    }
    const pagesCount = Math.ceil(categoryProducts.length / furniturePerPage);

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
          {categoryProducts.length <= amountProduct ? (
            // Component
            <ProductContainer
              categoryProducts={categoryProducts}
              item={1}
              activePage={activePage}
              amountProduct={amountProduct}
            />
          ) : (
            <Swipeable
              onLeftAction={() => this.handlePageChange(activePage - 1)}
              onRightAction={() => this.handlePageChange(activePage + 1)}
              enableMouseEvents
            >
              {this.iterationFunction(categoryProducts, amountProduct).map(item => {
                return (
                  <ProductContainer
                    key={uuidv4()}
                    categoryProducts={categoryProducts}
                    item={item}
                    activePage={activePage}
                    amountProduct={amountProduct}
                  />
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
  deviceType: PropTypes.string,
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
      imageSource: PropTypes.string,
      isFavorite: PropTypes.bool,
      isExchange: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
