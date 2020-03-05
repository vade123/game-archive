import React from 'react';

const FrontPage = ({games}) => {
  const list = {
    fontSize: 18
  }
  const div = {
    paddingLeft: 25
  }
  return (
    <div>
      <h1>Juomapeliarkisto</h1>
      <div style={div}>
        {games.map(game => 
          <li key={game.name} style={list}>{game.name}</li>
        )}
      </div>
    </div>
  )
};

export default FrontPage;