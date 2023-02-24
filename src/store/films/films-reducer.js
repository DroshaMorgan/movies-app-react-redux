import {SET_FILMS} from "./films-actions";

export const filmsReducer =(state=[], {type, payload}) => {
    switch (type) {
        case SET_FILMS:
            return payload;
        default:
            return state;
    }
}