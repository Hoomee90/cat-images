import React, { useEffect, useReducer } from 'react';
import catImageReducer from '../reducers/cat-image-reducer';
import { getCatImageSuccess, getCatImageFailure } from '../actions/index';

const initialState = {
  isLoaded: false,
  catImage: null,
  error: null
}

function Cats() {

  const [state, dispatch] = useReducer(catImageReducer, initialState);

  useEffect(() => {
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
  }, [])

  const { error, isLoaded, catImage } = state;


  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <h1>Cat Image</h1>
        <img src={catImage} alt="a cat" />
      </React.Fragment>
    );
  }
}

export default Cats;