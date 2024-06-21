import { useState } from "react";

function SingleTodo(props) {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(props.todo.text);
  return editable ? (
    <div className="flex w-full justify-between bg-yellow-300 rounded p-2 mt-1">
      <input
        className="w-[89%] rounded h-9 text-center"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          props.updateTodo(props.todo.id, inputValue);
          setEditable(false);
        }}
        className="bg-pink-700 rounded px-2 mr-3 text-white"
      >
        Update
      </button>
    </div>
  ) : (
    <div className="mt-1 p-1">
      <div className="flex justify-between bg-white rounded p-2 ">
        <input
          className="text-black"
          type="checkbox"
          checked={props.todo.checked}
          onChange={() => props.changeStatus(props.todo.id)}
        />
        {props.todo.checked ? (
          <del>
            <h1>{props.todo.text}</h1>
          </del>
        ) : (
          <h1>{props.todo.text}</h1>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => setEditable(true)}
            className="bg-emerald-700 h-9 rounded px-2 mr-5 text-white"
          >
            Edit
          </button>
          <button
            onClick={() => props.deleteTodo(props.todo.id)}
            className="bg-red-700 rounded px-2 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default SingleTodo;
