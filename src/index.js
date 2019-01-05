import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';

const render = () => { ReactDOM.render(<App />, document.getElementById('root')); };

render();

store.subscribe(render);

serviceWorker.unregister();
