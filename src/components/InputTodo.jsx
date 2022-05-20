import React from "react";

export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    minHeight: "30px",
    margin: "8px",
    padding: "8px",
    borderRadius: "8px"
  };
  const { todoText, onClickAdd, setTodoText, message, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
      <p>{message}</p>
    </div>
  );
};
