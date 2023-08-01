import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getListMovies from '../redux/actions/movieActions';
import Movie from './Movie';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const MovieBlocks = (props) => {
    // get data from store (redux-thunk)
    const dispatch = useDispatch();

    const movieBlock = useSelector(state => state.movieList);

    const { success, loading, movies } = movieBlock;

    console.log(movieBlock);

    // on page load get the data
    // pass in an empty array on 2nd param to prevent infinite loop
    useEffect(() => {
      dispatch(getListMovies())
    }, []);

    const rows =[];

    if(movies != null) {
      for (let i = 0; i < movies.length; i++)
      {
        rows.push(movies[i]);
      }
    }
  
  return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
        spacing={2}
      >
      {rows.map((movie) => (
        <Grid items xs={3} key={movie.id}>
          <Card sx={{
            maxWidth: 245,
            margin: "0 auto",
            padding: "0.1em",
            backgroundColor: "rgb(43, 30, 34)",
          }}>
            <CardMedia
              component="img"
              height="250"
              sx={{
                padding: "1em 1em 0 1em",
                objectFit: "contain"
              }}
              image={movie.Image}
              title={movie.Title}
            />
            <CardContent>
              <Typography align='center' gutterBottom variant='h5' component="div">
                {movie.Title}
              </Typography>
              <Typography align='center' variant="body2" color="text.secondary">
                {movie.Year}
              </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
              <Button variant="contained" size="small">Add to my List</Button>
            </CardActions>
          </Card>
        </Grid>
      ))};
      </Grid>
  )
}

export default MovieBlocks