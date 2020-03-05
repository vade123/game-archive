import React from 'react';

const Game = ({ game, setCurrent }) => {
  const text = {
    fontSize: 15,
  }
  const button = {
    height: '35px',
    width: '105px'
  }
  return (
    <div>
      <button style={button} onClick={()=>setCurrent(null)}>{'<<<'}</button>
      <h1>{game.name}</h1>
      <text style={text}>{game.text}</text>
    </div>
  )
}

export default Game;