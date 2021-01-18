/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

const createActionName = name => `app/products/${name}`;

/* action types */
const ADD_FAVORITE = createActionName('ADD_FAVORITE');
const REMOVE_FAVORITE = createActionName('REMOVE_FAVORITE');

export const addFavorite = payload => ({ payload, type: ADD_FAVORITE });
export const removeFavorite = payload => ({ payload, type: REMOVE_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVORITE: {
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.isFavorite = true;
        }
        return product;
      });
    }
    case REMOVE_FAVORITE: {
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.isFavorite = false;
        }
        return product;
      });
    }
    default:
      return statePart;
  }
}

// ...statePart,
//         products: statePart.products.map(product => (
//           product.id === action.payload.id) ?
//           {...action.payload,
//             isFavorite: true,
//           } :
//           product),
//       };
