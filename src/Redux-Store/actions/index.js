import * as types from "../constants/ActionTypes"
import axios from "axios";
// import { BaseUrl, token } from "../../apiService";
// import jwt from 'jsonwebtoken';
import { Redirect } from "react-router-dom";

// import { BaseUrl, locationKey } from "../services/BaseUrl";
// export const receiveCategories = (category) => ({
//     type: types.RECEIVE_CATEGORY,
//     category,
//   });

//   export const onLogin = (data) => ({
//     type: types.USER_DATA,
//     data,
//   });
export const get_UnitedStates_states = (states) =>  ({
      type: types.GET_STATES,
      states,
  })
export const set_Filter_Data = (filter) =>  ({
    type: types.SET_FILTERS,
    filter,
})