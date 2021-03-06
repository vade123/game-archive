import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import React from 'react';

const FrontPage = ({ games }) => {
  return (
    <div>
      <h1 style={{ fontSize: 26.5 }}>Juomapeliarkisto</h1>
      <div>
        {games.map(game =>
          <ListItem key={game.name} game={game} />)}
      </div>
      <div style={{ marginTop: '31.4159265359px' }}>
        <Link to='/upload'>
          <button style={{ height: '35px', width: '239px' }}>+</button>
        </Link>
      </div>
    </div>
  );
};

export default FrontPage;