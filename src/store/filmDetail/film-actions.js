import axios from "axios";
const API_KEY = "134870c7-2fa3-414f-b313-805fcae1a058";
const API_URL_MOVIE_DETAILS = "https://kinopoiskapiunofficial.tech/api/v2.1/films/";

export const SET_FILM_MODAL = 'SET_FILM_MODAL';

export const setFilmModal = (film) => ({
    type: SET_FILM_MODAL,
    payload: film
})


export const loadModalFilms = (filmId) => (dispatch) => {
    axios.get(API_URL_MOVIE_DETAILS + filmId, {
        headers:{
            'X-API-KEY': API_KEY,
        }
    })
        .then(({data}) => dispatch(setFilmModal(data)))
}