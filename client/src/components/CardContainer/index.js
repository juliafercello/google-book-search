import React from "react";

function CardContainer(props) {
    return (
        <div className="card m-3">
            <div className="card-header alert-info lead">
                <strong>{props.message}</strong>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default CardContainer;