import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './components/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const smartMiddleware = applyMiddleware(thunk);

export default createStore(
    reducers, 
    composeEnhancers(smartMiddleware), 
);