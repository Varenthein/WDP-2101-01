/* selectors */
export const getProductToCompare = ({ compare }) => compare;

/* action name creator */
const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');

/* action creators */
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE: {
      let index = statePart.findIndex(product => product.id === action.payload.id);
      return statePart.length < 4 && index === -1
        ? [...statePart, { ...action.payload, id: action.payload.id }]
        : [...statePart];
    }
    case REMOVE_FROM_COMPARE: {
      return [...statePart.filter(product => product.id !== action.payload.id)];
    }
    default:
      return statePart;
  }
}
