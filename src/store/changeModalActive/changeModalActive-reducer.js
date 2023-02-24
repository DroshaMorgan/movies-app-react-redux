import {CHANGE_MODAL_ACTIVE} from "./changeModalActive-actions";


export const changeModalActiveReducer = (state = false, {type, payload}) => {
    switch (type) {
        case CHANGE_MODAL_ACTIVE:
            return payload;
        default:
            return state;
    }
}