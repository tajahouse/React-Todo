import React from "react";

const Todo = props =>{
    const handleClick = e =>{
        props.toggle(props.entry.id)
    }
    return (
        <div onClick={handleClick} 
        className ={`entry${props.entry.completed ? 'completed' : ''}`}>
            <p>{props.entry.task}</p>
        </div>
    )
}
export default Todo;