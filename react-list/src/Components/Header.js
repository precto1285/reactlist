import React from 'react';

const Header = (props) => {
  return (
    <div className="container jumbotron bg-secondary text-white">{props.title}</div>
  )
}

export default Header;