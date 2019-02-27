import React from 'react';


const Footer = (props) => {
  return (
    <div className="container jumbotron bg-primary text-white">{props.footer}</div>
  )
}

export default Footer;