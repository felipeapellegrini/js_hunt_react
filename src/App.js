import React from 'react';
import './styles.css';
import Header from './components/header/index';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
