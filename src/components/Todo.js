import React from "react"

const Todo = ({ todo, todoList, inputTodo, addTodo }) => {
  return (
    <div>
      <input type="text" onChange={e => inputTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)} >追加</button>
      <ul>
        {
          todoList.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todo
