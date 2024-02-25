import React from 'react'

function TodoCard({todo}) {
  return (
    <div>
        <p className='todo-card'>{todo.title}</p>
    </div>
  )
}

export default TodoCard