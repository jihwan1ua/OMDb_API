import React, { Component, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Divider } from '@mui/material';
import { addMovieToMyList } from '../redux/actions/movieActions';
import getListMovies from '../redux/actions/movieActions';

const MovieCard = (props) => {

  // this function will trigger on click of add to my list button.
  // It will check if user is logged in, if not then modal will show to redirect to registration form
  // if logged in, the movie info will be saved to DB under the user
  function movieOnClick(movie) {
    const movieSelected = {
        // user: login,
        Title: movie.Title,
        Year: movie.Year,
        Rated: movie.Rated,
        Released: movie.Released,
        Runtime: movie.Runtime,
        Genre: movie.Genre,
        Director: movie.Director,
        Writer: movie.Writer,
        Actors: movie.Actors,
        Plot: movie.Plot,
        Language: movie.Language,
        Country: movie.Country,
        Awards: movie.Awards,
        Poster: movie.Poster,
        Ratings: movie.Ratings,
        Metascore: movie.Metascore,
        imdbRating: movie.imdbRating,
        imdbVotes: movie.imdbVotes,
        imdbID: movie.imdbID, 
        Type: movie.Type,
        DVD: movie.DVD, 
        BoxOffice: movie.BoxOffice,
        Production: movie.Production,
        Website: movie.Website,
        Response: movie.Response,
    };  

    dispatch(addMovieToMyList(movieSelected))
    dispatch(getListMovies())
    dispatch(getListMovies())
  }

  const dispatch = useDispatch();
  // prop passed by MovieBlocks with map fuction.
  // key=index, movie=movie
  const { key } = props;
  const { movie } = props;

  const movieBlock = useSelector(state => state.movieList);
  const { success, loading, movies } = movieBlock;

  useEffect(() => {
    dispatch(getListMovies())
  }, [])

  return (
    <Grid items xs={3} key={key}>
        <Divider orientation="horizontal" spacing = {3} flexItem sx={{ mb: "10px"}} />
        <Card sx={{
        maxWidth: 245,
        margin: "0 auto",
        padding: "0.1em",
        // backgroundColor: "rgb(43, 30, 34)",
        }}>
        <CardMedia
            component="img"
            height="250"
            sx={{
            padding: "1em 1em 0 1em",
            objectFit: "contain"
            }}
            image={movie.Poster}
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
            {/* <Button variant="contained" size="small" onClick={() => alert('Please log in to add to your list!')}>Add to my List</Button> */}
            <Button
                variant="contained"
                size="small"
                disabled={
                    movies?.length >= 5 
                        ? true
                        : false
                }
                onClick={() => movieOnClick(movie)}>
            Add to my List
            </Button>
        </CardActions>
        </Card>
    </Grid>
  )
}

export default MovieCard