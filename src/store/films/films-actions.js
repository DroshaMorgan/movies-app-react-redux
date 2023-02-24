import axios from "axios";

const API_KEY = "134870c7-2fa3-414f-b313-805fcae1a058";
// const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=";

export const SET_FILMS = 'SET_FILMS';

export const setFilms = (films) => ({
    type: SET_FILMS,
    payload: films
})

export const loadFilms = (api, apiId = 1) => (dispatch) => {
    axios.get(api + apiId, {
        headers:{
            'X-API-KEY': API_KEY,
        }
    })
        .then(({data}) => dispatch(setFilms(data)))
        // .catch((err) => dispatch(setError(err.message)));
}

export const loadSearchFilms = (api, apiId = 1) => (dispatch) => {
    axios.get(api + apiId, {
        headers:{
            'X-API-KEY': API_KEY,
        }
    })
        .then(({data}) => dispatch(setFilms(data)))
    // .catch((err) => dispatch(setError(err.message)));
}