import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { Grid } from '@mui/material';

const MovieBlocks = (props) => {
  
  const { movies } = props;
  let content = '';

  // loop through and outputs the list of movies
  // each movie will be using component MovieCard
  content = movies?.length > 0 ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />) : null; 

  return(
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="baseline"
    >
      { content }
    </Grid>
  )
}

const mapStateToProps = state => ({
  movies: state.searchList.result_movies
});

export default connect(mapStateToProps)(MovieBlocks);