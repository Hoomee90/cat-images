import * as c from './ActionTypes';

export const getCatImageSuccess = (catImage) => ({
  type: c.GET_CAT_IMAGE_SUCCESS,
  catImage
});

export const getCatImageFailure = (error) => ({
  type: c.GET_CAT_IMAGE_FAILURE,
  error
});

export const unloadCatImage = () => ({
  type: c.RESET_CAT_IMAGE
});