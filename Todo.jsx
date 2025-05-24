import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TODO.css';

export default function Todo(){
    let [ todo, setTodo] = useState ([{Task : "Sample-Task" ,id: uuidv4(), isDone : false}]);
    let [ newtodo, setNewtodo] = useState("");

    let addNewTask = () =>{
        setTodo((prevTodos) => {
          return [...prevTodos, {Task: newtodo , id: uuidv4() , isDone : false}];
        });
        setNewtodo("");
    };
    let updateTodoValue = (event) => {
        setNewtodo (event.target.value);
    };
    let todoDlt = (id) =>{
      setTodo((prevTodos) => todo.filter((prevTodos) => prevTodos.id != id));
      
    }
     let upperCaseAll = () => {
    setTodo((todos) =>
        todos.map((todo) => {
            return {
                ...todo,
                Task: todo.Task.toUpperCase(),
            };
        })
    );
};
let markAllDone = () => {
        setTodo((prevTodos) =>
        prevTodos.map((todo) =>{
            
                return{
                    ...todo,
                    isDone : true,
                };
            
            } )
    );
    } ;


    let markAsDone = (id) => {
        setTodo((prevTodos) =>
        prevTodos.map((todo) =>{
            if (todo.id == id){
                return{
                    ...todo,
                    isDone : true,
                };
            }else{
                    return todo;
                
            }
            } )
    );
    } ;
    return(
        <div>
            <input placeholder="Add a Task" value={newtodo} onChange={updateTodoValue}></input>
            <br></br><br></br>
            <button onClick={addNewTask}>Add Task</button>
             <br></br> <br></br>
            <hr></hr>
            <h2>Task To Do</h2>
            <ul>{
                todo.map((todo) =>(
                    <li key={todo.id}>
                        <span style = {todo.isDone ? {textDecorationLine : "line-through"} : {}}>
                            {todo.Task}</span> 
                        &nbsp; &nbsp; &nbsp;
                        <button onClick = {() => todoDlt(todo.id)}>Delete</button>
                        <button onClick = {() => markAsDone(todo.id)}>Mark as Done</button>
                        </li>
                )) }
            </ul>
            <button onClick={upperCaseAll}>UPPERCASE ALL </button>
            <br></br> <br></br>
            <button onClick = {markAllDone}>Mark All Done</button>
        </div>
    );
}