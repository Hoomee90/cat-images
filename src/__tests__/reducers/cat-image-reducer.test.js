import catImageReducer from '../../reducers/cat-image-reducer';
import * as c from '../../actions/ActionTypes';

describe('catImageReducer', () => {

  let action;
  const initialState = {
    isLoaded: false,
    catImage: null,
    error: null
  };

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        catImageReducer(initialState, { type: null })
      }
    ).toThrowError("There is no action matching null.");
  });

  test('successfully getting top stories should change isLoaded to true and update catImage', () => {
    const catImage = "An image";
    action = {
      type: c.GET_CAT_IMAGE_SUCCESS,
      catImage
    };

    expect(catImageReducer(initialState, action)).toEqual({
      isLoaded: true,
      catImage: "An image",
      error: null
    });
  });

  test('failing to get catImage should change isLoaded to true and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_CAT_IMAGE_FAILURE,
      error
    };

    expect(catImageReducer(initialState, action)).toEqual({
      isLoaded: true,
      catImage: null,
      error: "An error"
    });
  });
});