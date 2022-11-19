import React from 'react';

const Header = () => {
  console.log("Header has loaded!");
  return (
    <h1>This is the Header</h1>
  )
}

export default React.memo(Header);