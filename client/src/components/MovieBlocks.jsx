import React, { Component, useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import getListMovies from '../redux/actions/movieActions';
import { Box, Grid } from '@mui/material';

const MovieBlocks = (props) => {
  
  const { moviesSearch } = props;
  let content = '';

  const dispatch = useDispatch();
  const movieBlock = useSelector(state => state.movieList);

  const { success, loading, movies } = movieBlock;

  useEffect(() => {
    dispatch(getListMovies())
  }, [])

  // make api calls to the api/movies to grab the list of movies, if more than 5 then show the banner

  // loop through and outputs the list of movies
  // each movie will be using component MovieCard
  content = moviesSearch?.length > 0 ? moviesSearch.map((movie, index) => <MovieCard key={index} movie={movie} />) : null; 

  return(
    <div>
      <div hidden={
        movies?.length >= 5
          ? false
          : 'hidden'
      }>
        <Box
          mt="1em"
          mb="1em"
          backgroundColor="black"
          color="white"
          textAlign={'center'}
        >
            You have added {movies?.length} movies to your list
        </Box>
        </div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
      >
        { content }
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  moviesSearch: state.searchList.result_movies
});

export default connect(mapStateToProps)(MovieBlocks);