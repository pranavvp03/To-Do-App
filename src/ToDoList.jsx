import React, { useState } from "react"

function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [newtask, setNewtask] = useState("");

    function handleinputchange(event) {
        setNewtask(event.target.value);
    }

    function addtask() {
        if(newtask.trim() !== ""){
            setTasks(t => [...t, newtask]);
        setNewtask("");
        }
    }

    function deletetask(index) {
        
        const updatedtasks = tasks.filter((element, i) => i !==index);
        setTasks(updatedtasks);
    }

    function movetaskUp(index) {
        
        if(index > 0){
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index - 1]] =
            [updatedtasks[index-1], updatedtasks[index]];
            setTasks(updatedtasks);

        }

        
    }

    function movetaskDown(index) {
        if(index < tasks.length -1){
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index + 1]] =
            [updatedtasks[index + 1], updatedtasks[index]];
            setTasks(updatedtasks);

        }
        
    }


    
    return(
    <div className="to-do-list">

        <h1>To-DO-List</h1>

        <div>
           <input
               type="text"
               placeholder="Enter your tasks..."
               value={newtask}
               onChange={handleinputchange}/>
               <button className="add-button"
               onClick={addtask}>
                Add
               </button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={() =>deletetask(index)}>
                        Delete
                    </button>
                    <button 
                        className="move-button"
                        onClick={() =>movetaskUp(index)}>
                        🔼
                    </button>
                    <button 
                        className="move-button"
                        onClick={() =>movetaskDown(index)}>
                        🔽
                    </button>

                </li>
            )}
        </ol>

    </div>);
}
export default TodoList