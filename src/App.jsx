import React, { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["ccc", "ddd"]);
  const [todoText, setTodoText] = useState("");

  const onClickAdd = () => {
    if (!todoText) {
      return;
    }
    setIncompleteTodos((prevIncompleteTodos) => [
      ...prevIncompleteTodos,
      todoText
    ]);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    setIncompleteTodos((prevIncompleteTodos) => {
      prevIncompleteTodos.splice(index, 1);
      return [...prevIncompleteTodos];
    });
  };

  const onClickComplete = (index) => {
    const doneTodo = incompleteTodos[index];
    setCompleteTodos((prevCompleteTodos) => [...prevCompleteTodos, doneTodo]);
    setIncompleteTodos((prevIncompleteTodos) => {
      prevIncompleteTodos.splice(index, 1);
      return [...prevIncompleteTodos];
    });
  };

  const onClickUndo = (index) => {
    const undoTodo = completeTodos[index];
    setIncompleteTodos((prevIncompleteTodos) => [
      ...prevIncompleteTodos,
      undoTodo
    ]);
    setCompleteTodos((prevCompleteTodos) => {
      prevCompleteTodos.splice(index, 1);
      return [...prevCompleteTodos];
    });
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onClickAdd={onClickAdd}
        setTodoText={setTodoText}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          追加できるTODOは5個までです。消化してください。
        </p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickUndo={onClickUndo} />
    </>
  );
};
