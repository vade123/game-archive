import '../App.css'

import ListItem from './ListItem'
import React from 'react';

const FrontPage = ({ games, setCurrent }) => {

  return (
    <div>
      <h1>Juomapeliarkisto</h1>
      <div>
        {games.map(game =>
          <ListItem game={game} setCurrent={setCurrent} />)}
      </div>
    </div>
  )
};

export default FrontPage;