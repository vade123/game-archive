import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const ListItem = ({ game }) => {
  const [ hover, setHover ] = useState(false);
  
  let item;
  if (hover) {
    item = {
      fontSize: 20,
      color: 'blue',
      cursor: 'pointer',
      textDecoration: 'underline',
    };
  } else {
    item = {
      fontSize: 20,
      color: 'black',
    };
  }
  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <ul
      key={game.name} 
      style={item}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
        <Link to={`/${game.name}`}>> {game.name}</Link>
    </ul>
  )
}

export default ListItem;
