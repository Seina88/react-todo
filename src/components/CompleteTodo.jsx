import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickUndo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((todo, i) => {
          return (
            <li key={i}>
              <div className="list-row">
                <p className="text">{todo}</p>
                <button
                  onClick={() => {
                    onClickUndo(i);
                  }}
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
