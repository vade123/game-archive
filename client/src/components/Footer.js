import React from 'react';

const Footer = () => {
  const style = {
    color: 'grey',
    fontSize: 15,
  }
  const text = {
    paddingLeft: 3,
  }
  return (
    <div style={style}>
      <br />
      <strong>----------------------------</strong>
      <br />
      <strong style={text}>tg: @vade123</strong>
    </div>
  )
}

export default Footer;