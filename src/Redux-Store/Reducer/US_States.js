import { GET_STATES, SET_FILTERS } from "../constants/ActionTypes";
const initialState = {
    country_states: []
};


const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATES:
            return {
                ...state,
                country_states: action.states
            }
        case SET_FILTERS:
        return {
            ...state,
            filters: action.filter
        }
        default:
            return state;
    }
}

export default stateReducer