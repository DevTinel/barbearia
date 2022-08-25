import React from 'react';
import './style.css';
import { Banner } from './componentes/Banner/Banner';
import { Header } from './componentes/Header/Header';
import { Home } from './componentes/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
    </div>
  );
}

export default App;
