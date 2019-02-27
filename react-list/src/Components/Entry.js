import React from 'react';

const Entry = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Entry</h2>
        </div>
        <div className="card-body bg-warning">
          <form className="form mt-3">
            <input className="form-control" id="entryitem" placeholder="Enter Item Here" />
            <button onClick={console.log("Hello World!")} className="btn btn-danger mt-5">Add to List</button>
          </form>
          <p>for example: {props.newitem}</p>
        </div>
      </div>


    </div>
  )
}

export default Entry;