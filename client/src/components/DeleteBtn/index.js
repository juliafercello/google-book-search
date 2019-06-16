import React from "react";

function DeleteBtn(props) {
  return (
    <button type="button" {...props} className="btn btn-info float-right">Delete</button>
  );
}

export default DeleteBtn;
