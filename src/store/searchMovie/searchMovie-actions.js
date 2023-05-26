// import axios from "axios";
// const API_KEY = "134870c7-2fa3-414f-b313-805fcae1a058";
// const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

export const SET_SEARCH_MOVIE = 'SET_FILM_MODAL';

export const setSearchMovie = (movie) => ({
    type: SET_SEARCH_MOVIE,
    payload: movie
})