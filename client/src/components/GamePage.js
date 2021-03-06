import { Link } from 'react-router-dom';
import NoMatch from './NoMatch';
import React from 'react';

const GamePage = ({ game }) => {
  if (!game) return <NoMatch />;
  
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
      <div style={{ fontSize: 15 }} dangerouslySetInnerHTML={{ __html: game.text }} />
    </div>
  );
};

export default GamePage;