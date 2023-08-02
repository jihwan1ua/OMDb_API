import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getListMovies from '../redux/actions/movieActions';

{/*
  TODO: Future development.
  Following component is for the single movie detail view component when user clicks into the movie from MovieCard,
*/}

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
    <div></div>
    // {content.Search.map((movies) => (
    //   <Grid items xs={3} key={movies.id}>
    //     <Card sx={{
    //       maxWidth: 245,
    //       margin: "0 auto",
    //       padding: "0.1em",
    //       backgroundColor: "rgb(43, 30, 34)",
    //     }}>
    //       <CardMedia
    //         component="img"
    //         height="250"
    //         sx={{
    //           padding: "1em 1em 0 1em",
    //           objectFit: "contain"
    //         }}
    //         image={movies.Image}
    //         title={movies.Title}
    //       />
    //       <CardContent>
    //         <Typography align='center' gutterBottom variant='h5' component="div">
    //           {movies.Title}
    //         </Typography>
    //         <Typography align='center' variant="body2" color="text.secondary">
    //           {movies.Year}
    //         </Typography>
    //       </CardContent>
    //       <CardActions style={{justifyContent: 'center'}}>
    //         <Button variant="contained" size="small">Add to my List</Button>
    //       </CardActions>
    //     </Card>
    //   </Grid>
    // ))};
  )
}

export default Movie
