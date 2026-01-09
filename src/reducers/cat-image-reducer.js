import * as c from '../actions/ActionTypes';

const catImageReducer = (state, action) => {
  switch (action.type) {
    case c.GET_CAT_IMAGE_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        catImage: action.catImage
      };
    case c.GET_CAT_IMAGE_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    case c.RESET_CAT_IMAGE:
      return {
        ...state,
        isLoaded: false,
        catImage: null,
        error: null
      }
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default catImageReducer;