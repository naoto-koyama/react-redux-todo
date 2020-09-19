export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: { todo: todo }
  }
}

export const inputTodo = (todo) => {
  return {
    type: 'INPUT_TODO',
    payload: { todo: todo }
  }
}
