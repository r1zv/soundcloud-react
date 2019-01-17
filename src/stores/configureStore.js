import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const logger = createLogger();


const createStoreWithMiddleware = applyMiddleware()(createStore);

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState);
}