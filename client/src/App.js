import './App.css'

import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer';
import FrontPage from './components/FrontPage';
import GamePage from './components/GamePage';
import UploadPage from './components/UploadPage';
import gameService from './services/games';

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService
      .getAll()
      .then(result => {
        setGames(result.games)
      });
  }, []);

  const gameByName = ( name ) => {
    return games.find(game => game.name === name)
  };
  
  return (
    <div>
      <Router>
        <Route exact path='/' render={() => <FrontPage games={games} />} />
        <Route exact path='/:name' render={({ match }) =>
          <GamePage game={gameByName(match.params.name)} />
        } />
        <Route exact path='/upload' render={() => <UploadPage />} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
