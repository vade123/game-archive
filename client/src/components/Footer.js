import React from 'react';

const Footer = () => {
  const style = {
    color: 'grey',
    fontSize: 15,
  }
  const text = {
    paddingLeft: 3,
    paddingTop: 3
  }
  return (
    <div style={style}>
      <strong>----------------------------</strong>
      <br />
      <strong style={text}>tg: @vade123</strong>
      <br />
      <a style={text} href="https://github.com/vade123/game-archive">view on github</a>
    </div>
  )
}

export default Footer;