import React from 'react'


const Todos = ({todo, toggleTodo }) => {
  function handleTodoClick () {
    toggleTodo(todo.id)
}
  return (
    <div className="list__todos font-serif p-2 text-neutral-focus flex gap-2 ">
      <input type="checkbox" checked={todo.complete} id="todo.id" className="w-6" onChange={handleTodoClick} />
      <p className="font-serif text-2xl text-primary-dark">{todo.name}</p>
    </div>
  )
}

export default Todos