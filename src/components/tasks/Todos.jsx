import React from 'react'


const Todos = ({todo, toggleTodo }) => {
  function handleTodoClick () {
    toggleTodo(todo.id)
}
  return (
    <div className="list__todos font-serif p-1 text-neutral-focus">
      <input type="checkbox" checked={todo.complete} id="todo.id" onChange={handleTodoClick} />
      {todo.name}
    </div>
  )
}

export default Todos