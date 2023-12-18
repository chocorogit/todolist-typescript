import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todos from '../modules/todosSlice';

const rootReducer = combineReducers({
    todos,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
