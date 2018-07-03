import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index';
import './index.css';
import App from './components/App/App';

const store = createStore(reducer);

registerServiceWorker();

App(store);
