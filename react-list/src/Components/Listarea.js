import React from 'react';

const Listarea = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>List Area</h2>
        </div>
        <div className="card-body bg-success">
          {props.items}
        </div>
      </div>


    </div>
  )
}

export default Listarea;