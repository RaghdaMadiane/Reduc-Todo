import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { deleteTask } from '../../redux/taskSlice'
const TodoList = () => {
	const tasklist = useSelector((state) => state.todo.tasks)
	// const index = useSelector((state) => state.tasks.id)
	const dispatch = useDispatch()
	return (
		<>
		
		
			{tasklist.map((todo,i) => (

				<div className="card mx-3 my-3" key={i}>
					
					<div className="card-header">
						Task
					</div>
					<div className="card-body ">

						<p className="card-text">{todo}</p>
						<div className='d-flex justify-content-end'>
							<button className="btn btn-danger " onClick={() => dispatch(deleteTask({id:i}))}>Delete</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default TodoList;