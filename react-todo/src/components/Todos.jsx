import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
function Todos(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue !== "") {
          let flag = false;
          todos.forEach((ele) => {
            if (ele.text === inputValue) {
              flag = true;
            }
          });
          if (flag) {
            alert("task already in progress");
          } else {
            setTodos([
              ...todos,
              { id: todos.length + 1, text: inputValue, checked: false },
            ]);
            setInputValue("");
          }
        } else {
          alert("the value cannot be empty");
        }
    
       
      };
      
     
      const deleteTodo = (id) => {
        setTodos(todos.filter((ele) => ele.id !== id));
      };
    
      
      const changeStatus = (id) => {
        setTodos(
          todos.map((ele) => {
            if (ele.id === id) {
              return { ...ele, checked: !ele.checked };
            } else {
              return ele;
            }
          })
        );
      };
    
        
      const updateTodo = (id, value) => {
        setTodos(
          todos.map(ele => {
            if(ele.id === id){
              return {...ele, text: value};
            }
            else{
              return ele;
            }
          })
        );
      };
    
return ( <>
 <div className="h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <h3 className="text-center text-white text-2xl pt-10">My Todos</h3>
        <form
          onSubmit={handleSubmit}
          action=""
          className="pt-5 rounded flex gap-2 justify-center"
        >
            
          <input
            className="rounded text-center w-[70%] h-10"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Create a new todo"
          />
          <input
            className="bg-cyan-800 text-white px-2 rounded text pointer"
            type="submit"
            value={'Add your task'}
            
          ></input>
        </form>
        <div className="w-[70%] divide-y divide-blue-200 ml-[13%] mr-[5%] flex flex-col  bg-white mt-3 rounded">
          {todos.map((ele) => (
           <SingleTodo
           key={ele.id}
           todo = {ele}
           changeStatus = {changeStatus}
           deleteTodo = {deleteTodo}
           updateTodo = {updateTodo}/>
          ))}
         
        </div>
      </div>
    </>
  );
}
// {/* <div class="h-screen bg-gradient-to-r from-purple-500 to-pink-500">
// <h1 className="text-center text-white pt-7 font-sans font-semibold text-2xl">My Todos</h1>
//     <input className=" pt-4 mt-3 w-[70%] border-solid rounded-md border-2 border-zinc-300 justify-center ml-[15%] mr-15% style={{ backgroundImage: `url(${bag2})`}}">
        
//     </input>
// </div> */}



export default Todos;