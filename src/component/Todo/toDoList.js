
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { deleteTask } from '../../redux/taskSlice'
import { getData } from '../../redux/taskSlice'

import { request } from '../../IndexDB/indexedDB';
const TodoList = () => {
	const tasklist = useSelector((state) => state.todo.tasks)
	// const index = useSelector((state) => state.tasks.id)
	const dispatch = useDispatch()
	request.onsuccess=()=>{
        dispatch(getData())
    }
	
	return (
		<>
		
		
			{tasklist.map((todo) => (

				<div className="card mx-3 my-3" key={todo.id}>
					
					<div className="card-header">
						Task
					</div>
					<div className="card-body ">

						<p className="card-text">{todo.task}</p>
						<div className='d-flex justify-content-end'>
							<button className="btn btn-danger " onClick={() => dispatch(deleteTask({id:todo.id}))}>Delete</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default TodoList;