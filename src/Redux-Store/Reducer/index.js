import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
// Import custom components
// import categoryReducer from './category'
import statesReducer from './US_States';
const rootReducer = combineReducers({
    US_states: statesReducer,
    // user:userReducer,
    Intl
});

export default rootReducer;