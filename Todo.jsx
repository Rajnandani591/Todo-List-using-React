import { useState } from "react";
import './TODO.css';

export default function Todo(){
    let [todo, setTodo] = useState (["Simple Task"]);
    let [newtodo, setNewtodo] = useState("");

    let addNewTask = () =>{
        setTodo([...todo, newtodo]);
        setNewtodo("");
    };
    let updateTodoValue = (event) => {
        setNewtodo (event.target.value);
    };
    return(
        <div>
            <input placeholder="Add a Task" value={newtodo} onChange={updateTodoValue}></input>
            <br></br><br></br>
            <button onClick={addNewTask}>Add Task</button>
             <br></br> <br></br>
            <hr></hr>
            <h2>Task To Do</h2>
            <ol>{
                todo.map((task) =>(
                    <li>{task}</li>
                )) }
            </ol>
        </div>
    )
}