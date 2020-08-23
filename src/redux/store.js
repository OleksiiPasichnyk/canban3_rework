import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import canbanControlPanel from './reducer';

const store = createStore(canbanControlPanel, composeWithDevTools(
    applyMiddleware(),
));

export default store;
