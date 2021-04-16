import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoListDiff from '../components/TodoListDiff'

const mapStateToProps = ({todos}) => ({todos: todos})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListDiff)
