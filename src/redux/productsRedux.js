/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getHotDeals = ({ products }) =>
  products.filter(product => product.hotDeal);
export const getAds = ({ ads }) => ads;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

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
