import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MovieBlocks = () => {

    // get data from store (redux-thunk)
    const dispatch = useDispatch();

    const movieBlock = useSelector(state => state.movieList);

    const { success, loading, movies } = movieBlock;

    console.log(movieBlock);

  return (
    <div>
      <h1>Movie Lists</h1>

      
    </div>
  )
}

export default MovieBlocks