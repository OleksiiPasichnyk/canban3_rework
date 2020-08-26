import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import canbanControlPanel from './reducer';
import thunk from 'redux-thunk';

const store = createStore(canbanControlPanel, composeWithDevTools(
    applyMiddleware(thunk),
));

export default store;
