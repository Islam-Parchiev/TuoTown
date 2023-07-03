import React from 'react';
import Main from './pages/Main';
import './App.scss';
import Header from './components/Header/Header';

const  App:React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
