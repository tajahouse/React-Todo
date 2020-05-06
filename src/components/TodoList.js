import React from 'react';

import Todo from "./Todo"

const TodoList = props =>{
    return(
        <div className="list-wrapper">
            {props.list.map(entry =>(
                <Todo toggle={props.toggle} key={entry.id} entry={entry}/>
            ))}
    <button className="clear-btn" onClick={props.clearList}>
        Clear List
    </button>
        </div>
    )
}

export default TodoList;