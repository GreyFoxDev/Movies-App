import { ADD_MOVIE, REMOVE_MOVIE } from "./action-types";

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const removeMovie = (movieId) => ({
  type: REMOVE_MOVIE,
  payload: movieId,
});
