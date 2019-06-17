import React from "react";
import DeleteBtn from "../DeleteBtn";
import ViewBtn from "../ViewBtn";


function Card(props) {
  return (
    <div className="card p-2">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Written by: {props.authors.map(author => author+" ")}</p>
      <div className="card-body">
        <img className="img-thumbnail" alt={props.title} src={props.image} id={props.id} />
        <DeleteBtn onClick={() => props.deleteBook(props.key)} />
        <ViewBtn type="button" onClick={() => window.open(props.link)} />
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;