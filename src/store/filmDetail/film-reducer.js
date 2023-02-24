import {SET_FILM_MODAL} from "./film-actions";

export const filmReducer =(state= {}, {type, payload}) => {
    switch (type) {
        case SET_FILM_MODAL:
            return payload;
        default:
            return state;
    }
}