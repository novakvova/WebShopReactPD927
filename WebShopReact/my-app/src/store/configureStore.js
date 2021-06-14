import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { counterReducer } from '../components/counter/reducer';
import { connectRouter, routerMiddleware } from 'connected-react-router'; 
import { createBrowserHistory } from 'history';


// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
export const history = createBrowserHistory({ basename: baseUrl });

export default function configureStore(history, initialState) {

    const reducers = {
        counter: counterReducer
    };

    const rootReducer = combineReducers({
        ...reducers, //спред оператор
        router: connectRouter(history)
    });

    const middleware = [
        routerMiddleware(history)
    ];
    
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
      window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
      enhancers.push(window.devToolsExtension());
    }

    return createStore(rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers));
}

