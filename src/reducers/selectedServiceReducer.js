import {
    SELECTED_SERVICE
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SELECTED_SERVICE:
            return action.payload
        default:
            return state;
    }
};
