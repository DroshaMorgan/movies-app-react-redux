import {SET_SEARCH_MOVIE} from "./searchMovie-actions";

export const searchMovieReducer =(state= '', {type, payload}) => {
    switch (type) {
        case SET_SEARCH_MOVIE:
            return payload;
        default:
            return state;
    }
}