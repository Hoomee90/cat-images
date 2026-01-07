import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('cat image reducer actions', () => {
  it('getCatImageSuccess should create GET_CAT_IMAGE_SUCCESS action', () => {
    const catImage = "An image";
    expect(actions.getCatImageSuccess(catImage)).toEqual({
      type: c.GET_CAT_IMAGE_SUCCESS,
      catImage
    });
  });

  it('getCatImageFailure should create GET_CAT_IMAGE_FAILURE action', () => {
    const error = "An error";
    expect(actions.getCatImageFailure(error)).toEqual({
      type: c.GET_CAT_IMAGE_FAILURE,
      error
    });
  });
});