import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getListMovies from '../redux/actions/movieActions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Movie = (props) => {
  // get data from store (redux-thunk)
  const dispatch = useDispatch();

  const movieBlock = useSelector(state => state.movieList);

  const { success, loading, movies } = movieBlock;

  // on page load get the data

  // pass in an empty array on 2nd param to prevent infinite loop
  useEffect(() => {
    dispatch(getListMovies())
  }, [dispatch]);

  return (
    <Card sx={{
      maxWidth: 345,
      margin: "0 auto",
      padding: "0.1em",
    }}>
      <CardMedia
        component="img"
        height="250"
        sx={{
          padding: "1em 1em 0 1em",
          objectFit: "contain"
        }}
        image="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        title="Movie Title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Movie Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Movie Text......
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to my List</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Movie
