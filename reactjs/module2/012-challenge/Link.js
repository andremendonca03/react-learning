import React from 'react';

const Link = ({ link, text }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  )
}

export default Link;