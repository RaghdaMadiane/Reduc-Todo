import Todoform from './todoform';
import TodoList from './toDoList';

function Todo(){
   
    return(
        <div className='container '>
            <h1 className='text-center'>My Tasks</h1>
            <Todoform />
            <TodoList/>
        </div>
    )
}
export default Todo;