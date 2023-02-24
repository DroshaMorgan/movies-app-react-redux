import {SET_PAGE_COUNT, SET_CURRENT_PAGE} from "./pagination-actions";


export const paginationReducer = (state = null, {type, payload}) => {
    switch (type) {
        case SET_PAGE_COUNT:
            if (payload){
                return payload;
            }return state;
        // case SET_CURRENT_PAGE:
        //     if (payload){
        //         return payload;
        //     }return state;
        default:
            return state;
    }
}