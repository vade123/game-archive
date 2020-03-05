import './App.css'

import React, { useEffect, useState } from 'react';

import Footer from './components/Footer';
import FrontPage from './components/FrontPage'
import Game from './components/Game'
import gameService from './services/games';

const App = () => {
  const [games, setGames] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    gameService
      .getAll()
      .then(result => {
        setGames(result.games)
      });
  }, []);

  return (
    <div>
      {current === null && <FrontPage games={games} setCurrent={setCurrent} />}
      {current !== null && <Game game={current} setCurrent={setCurrent} />}
      <Footer />
    </div>
  )
}

export default App;
