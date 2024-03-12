import { combineReducers } from 'redux';
import groupsReducer from './groupsReducer';

const rootReducer = combineReducers({
  groups: groupsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;