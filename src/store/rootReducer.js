import {combineReducers} from "redux";
import {filmsReducer} from "./films/films-reducer";
import {changeAPIReducer} from "./changeAPI/changeAPI-reducer";
import {paginationReducer} from "./pagination/pagination-reducer";
import {filmReducer} from "./filmDetail/film-reducer";
import {changeModalActiveReducer} from "./changeModalActive/changeModalActive-reducer";
import {searchMovieReducer} from "./searchMovie/searchMovie-reducer";

export const rootReducer=combineReducers({
    filmsReducer,
    filmReducer,
    changeAPIReducer,
    paginationReducer,
    changeModalActiveReducer,
    searchMovieReducer
})