import React from "react";

function Todo({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
}

export default Todo;
