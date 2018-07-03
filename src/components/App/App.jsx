import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './App.css';
import Main from '../../containers/Main';


function App(store) {
  ReactDOM.render(
    <Provider store={store}>
      <div className="wrapper">
        <aside />
        <Main />
      </div>
    </Provider>,
    document.getElementById('root'),
  );
}

export default App;
