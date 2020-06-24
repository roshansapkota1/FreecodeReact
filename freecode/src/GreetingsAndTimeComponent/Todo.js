import React from 'react'


const Todo = (props) => {
    console.log('todo', props);
    
    return (
        <div className='todo-item'>
            <input  type='checkbox' checked={props.todosData.completed} />
            <p>{props.todosData.text}</p>
        </div>
        
    )
}

export default Todo;