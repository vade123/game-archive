import { Link } from 'react-router-dom';
import React from 'react';

const GamePage = ({ game }) => {
  if (!game) return null;
  
  const text = {
    fontSize: 15,
  };
  const button = {
    height: '35px',
    width: '105px'
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <Link to='/'>
        <button style={button}>
          {'<<<'}
        </button> 
      </Link>
      <h1 style={{ fontSize: 22 }}>{game.name}</h1>
      <div style={text} dangerouslySetInnerHTML={{ __html: game.text }} />
    </div>
  );
};

export default GamePage;