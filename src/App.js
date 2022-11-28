import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>      
      <Footer/>
    </div>
  );
}

export default App;
