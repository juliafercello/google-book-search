import React from "react";

function ViewBtn(props) {
    return (
        <button type="button" {...props} className="btn btn-info float-right" >View</button>
    );
}

export default ViewBtn;