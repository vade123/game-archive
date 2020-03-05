import './App.css'

import React, { useEffect, useState } from 'react';

import Footer from './components/Footer';
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
      <h1>Juomapeliarkisto</h1>
      {console.log(games)}
      {games.map(game => 
        <li key={game.name}>{game.name}</li>
      )}
      <Footer />
    </div>
  )
}

export default App;
