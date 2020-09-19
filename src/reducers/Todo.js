const initialState = {
  todoList: [],
  todo: null
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload.todo]
      }
    case 'INPUT_TODO':
      return {
        ...state,
        todo: action.payload.todo
      }
    default:
      return state
  }
}
