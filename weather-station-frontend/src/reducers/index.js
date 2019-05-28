import dataReducer from './dataReducer';
import connectionReducer from './connectionReducer';
import historyReducer from './historyReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	data: dataReducer,
	connection: connectionReducer,
	history: historyReducer
});

export default rootReducer;