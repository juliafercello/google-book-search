import React from "react";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";

function SavedCard(props) {
    return (
        <div className="card p-2">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Written by: {props.authors.map(author => author + " ")}</p>
            <div className="card-body">
                <img className="img-thumbnail" alt={props.title} src={props.image} id={props.id} />
                <ViewBtn type="button" onClick={() => window.open(props.link)} />
                <SaveBtn onClick={() => props.saveBook(props.index)} />
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default SavedCard;