import { combineReducers } from 'redux';
import user from './user'
import messages from './messages'
export default combineReducers({
	user,
	messages,
});