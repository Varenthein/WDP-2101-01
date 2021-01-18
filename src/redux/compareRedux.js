/* selectors */
export const getProductToCompare = ({ compare }) => compare;

/* action name creator */
const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');

/* action creators */
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE: {
      return {
        ...statePart,
        products: [...statePart, { ...action.payload, id: action.payload.jd }],
      };
    }
    default:
      return statePart;
  }
}
