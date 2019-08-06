import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  // console.log('props', props)
  return (
    <div className='todo-list'>
      {props.list.map((item) => (
        <Todo
        key={item.id}
        item={item}
        toggleItem={props.toggleItem} />
      ))}
      <button className='clear-btn' onClick={props.clearCompleted}>
        Clear Purchased
      </button>
    </div>
  )
}

export default TodoList
