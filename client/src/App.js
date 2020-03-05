import './App.css'

import React, { useEffect, useState } from 'react';

import Footer from './components/Footer';
import FrontPage from './components/FrontPage'
import gameService from './services/games';

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService
      .getAll()
      .then(result => setGames(result.games));
  }, []);

  return (
    <div>
      <FrontPage games={games} />
      <Footer />
    </div>
  )
}

export default App;
