import React, { useEffect, useReducer } from 'react';
import catImageReducer from '../reducers/cat-image-reducer';
import { getCatImageSuccess, getCatImageFailure, resetCatImage } from '../actions/index';

const initialState = {
  isLoaded: false,
  catImage: null,
  error: null
}

function CatController() {

  const [state, dispatch] = useReducer(catImageReducer, initialState);

  useEffect(() => {
    getCat();
  }, []);

  const getCat = () => {
    fetch(`https://cataas.com/cat?json=true`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json();
        }
      })
      .then((jsonifiedResponse) => {
        const action = getCatImageSuccess(jsonifiedResponse.url);
        dispatch(action);
      })
      .catch((error) => {
        const action = getCatImageFailure(error.message);
        dispatch(action);
      });
  }

  const handleClick = () => {
    const action = resetCatImage();
    dispatch(action)
    getCat();
  }

  const { error, isLoaded, catImage } = state;
  let buttonText = null;

  if (error) {
    buttonText = `Error: ${error}`;
  } else if (!isLoaded) {
    buttonText = "...Loading...";
  } else {
    buttonText = "Get Cat Image";
  }
  return (
    <React.Fragment>
      <h1>Cat Image</h1>
      <button className="d-block" onClick={handleClick}>{buttonText}</button>
      <hr />
      {catImage && <img src={catImage} alt="a cat" />}
    </React.Fragment>
  );
}

export default CatController;