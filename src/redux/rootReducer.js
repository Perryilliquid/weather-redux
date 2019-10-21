import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ajaxStatusReducer from './reducers/ajaxStatusReducer';
import storeReducer from './reducers/storeReducer';

export default combineReducers({
    ajaxStatus: ajaxStatusReducer,
    store: storeReducer,
    form: formReducer
});
