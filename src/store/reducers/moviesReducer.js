import { ADD_MOVIE, REMOVE_MOVIE } from "../actions/action-types";

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

