import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();