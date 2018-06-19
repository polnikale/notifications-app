import React from 'react';
import './App.css';
import MainWithInfo from '../../containers/MainWithInfo';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <aside/>
        <MainWithInfo/>
      </div>
    );
  }
}

export default App;
