import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid text-center bg-info">
      <h1 className="display-4">React Google Book Search</h1>
      <p className="lead">Search and Save the best books here!</p>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-white" href="/search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/books">Saved</a>
        </li>
      </ul>
    </div>
  );
}

export default Jumbotron;
