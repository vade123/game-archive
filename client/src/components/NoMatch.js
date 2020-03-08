import { Link } from 'react-router-dom';
import React from 'react';

const NoMatch = () => {
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
      <div>
        <p>Tääl ei oo mitää lol</p>
      </div>
    </div>
  );
};

export default NoMatch;