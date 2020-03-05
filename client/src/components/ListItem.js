import React, { useState } from 'react';

const ListItem = ({ game, setCurrent }) => {
  const [ hover, setHover ] = useState(false);
  
  let item;
  if (hover) {
    item = {
      fontSize: 18,
      color: 'blue',
      cursor: 'pointer',
      textDecoration: 'underline',
    };
  } else {
    item = {
      fontSize: 18,
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
      onMouseLeave={toggleHover}
      onClick={()=>setCurrent(game)}>
        > {game.name}
    </ul>
  )
}

export default ListItem;
