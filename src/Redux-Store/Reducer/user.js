import { USER_DATA } from "../constants/ActionTypes";
const initialState = {
    user: []
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default userReducer