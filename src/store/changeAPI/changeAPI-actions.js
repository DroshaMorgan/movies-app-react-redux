export const CHANGE_API = 'CHANGE_API';
export const CHANGE_SEARCH_API = 'CHANGE_SEARCH_API';

export const changeAPI = (API) => ({
    type: CHANGE_API,
    payload: API
})

export const changeSearchAPI = (API) => ({
    type: CHANGE_SEARCH_API,
    payload: API
})

// export const loadFilms = () => (dispatch) => {
//     axios.get(API_URL_POPULAR, {
//         headers:{
//             'X-API-KEY': API_KEY,
//         }
//     })
//         .then(({data}) => dispatch(setFilms(data)))
//         // .catch((err) => dispatch(setError(err.message)));
// }
