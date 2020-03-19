import { combineReducers } from 'redux';

import pingReducer from './ping';

export default combineReducers({
    ping: pingReducer
});
