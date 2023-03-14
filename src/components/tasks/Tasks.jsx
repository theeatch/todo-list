import React from 'react'
import Todos from './Todos'
const Tasks = ({todos, toggleTodo}) => {
    
  return (
    <div className="list__tasks">
        {todos.map (todo => {
            return <Todos key={todo.id} todo={todo} toggleTodo={toggleTodo}  />
        })}
    </div>
  )
}

export default Tasks