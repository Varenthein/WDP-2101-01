/* selectors */
export const getDeviceType = ({ deviceType }) => deviceType;

/* action name creator */
const reducerName = 'deviceType';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_WINDOW_WIDTH = createActionName('ADD_WINDOW_WIDTH');

/* action creators */
export const addWindowWidth = payload => ({ payload, type: ADD_WINDOW_WIDTH });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_WINDOW_WIDTH: {
      let screenSize = '';
      if (action.payload < 768) {
        screenSize = 'mobile';
      } else if (action.payload < 992) {
        screenSize = 'tablet';
      } else {
        screenSize = 'desktop';
      }
      return screenSize;
    }
    default:
      return statePart;
  }
}
