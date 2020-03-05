import { Link } from 'react-router-dom';
import React from 'react';

const GamePage = ({ game }) => {
  const text = {
    fontSize: 15,
  }
  const button = {
    height: '35px',
    width: '105px'
  }
  return (
    <div>
      <Link to='/'>
        <button style={button}>
          {'<<<'}
        </button> 
      </Link>
      <h1>{game.name}</h1>
      <text style={text}>{game.text}</text>

    </div>
  )
}

export default GamePage;