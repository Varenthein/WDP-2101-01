/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getHotDeals = ({ products }) =>
  products.filter(product => product.hotDeal);
export const getAds = ({ ads }) => ads;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// export const getLimitedProducts = ({ products }, limit) =>
//   products.filter((products, idx) => idx <= limit - 1);

export const getLimitedProducts = ({ products }, limit) => products.slice(0, limit);

const compareByParamAsc = param => (a, b) =>
  a[param] === b[param] ? 0 : a[param] < b[param] ? -1 : 1;

const compareByParamDesc = param => (a, b) =>
  a[param] === b[param] ? 0 : a[param] > b[param] ? -1 : 1;

export const sortAscByParam = ({ products }, param) =>
  products.sort(compareByParamAsc(param));

export const sortDescByParam = ({ products }, param) =>
  products.sort(compareByParamDesc(param));

const createActionName = name => `app/products/${name}`;

/* action types */
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');

export const toggleFavorite = payload => ({ payload, type: TOGGLE_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      return statePart.map(product => {
        if (product.id === action.payload.id && product.isFavorite === false) {
          product.isFavorite = true;
        } else if (product.id === action.payload.id && product.isFavorite === true) {
          product.isFavorite = false;
        }
        return product;
      });
    }
    default:
      return statePart;
  }
}
