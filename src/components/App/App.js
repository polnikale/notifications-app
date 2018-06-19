import React from 'react';

import './App.css';
import Main from '../../containers/Main';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <aside/>
        <Main/>
      </div>
    );
  }
}

export default App;
