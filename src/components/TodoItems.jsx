import React from "react";

const TodoItems = (props) => {
  const { text, id, isComplete, deleteTodo, toggle } = props;
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer my-3 gap-2">
        {isComplete ? (
          <i className="fa-solid fa-circle-check fa-2xl w-7" style={{ color: "#f54a00" }}></i>
        ) : (
          <i className="fa-regular fa-circle fa-2xl w-7" style={{ color: "#f54a00" }}></i>
        )}

        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <i
        onClick={() => {
          deleteTodo(id);
        }}
        className="fa-solid fa-trash fa-xl pr-3"
        style={{ width: "3.5px", cursor: "pointer", color: "black" }}></i>
    </div>
  );
};

export default TodoItems;
