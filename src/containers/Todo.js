import * as actions from '../actions/Todo'
import {connect} from "react-redux";
import Todo from "../components/Todo";

const mapStateToProps = ({todo}) => {
  return {
    todo: todo.todo,
    todoList: todo.todoList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(actions.addTodo(todo)),
    inputTodo: (todo) => dispatch(actions.inputTodo(todo))
  }
}

// Todoコンポーネントからthis.props.todoでstateのtodoを参照できる
// Todoコンポーネントからthis.props.addTodoでreducerをdispatch(呼ぶこと)することができる
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
