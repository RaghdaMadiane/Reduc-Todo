
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { deleteTask, updateData } from '../../redux/taskSlice'
import { getData } from '../../redux/taskSlice'
import { request } from '../../IndexDB/indexedDB';
const TodoList = () => {
	const tasklist = useSelector((state) => state.todo.tasks)
	const [editing, setEdit] = useState(false)
	const [state, setState] = useState({
		id: '', task: ''
	});
	const { task, id } = state;
	const dispatch = useDispatch()
	const viewData = (e) => {
		e.preventDefault();
		console.log(tasklist)
		dispatch(getData());

	}
	const edit = (id, task) => {
		setEdit(true);
		setState({ ...state, id, task });
	}
	const updatetask = () => {
		console.log(state);
		dispatch((updateData({ id, task })));
		setEdit(false);
	}

	return (
		editing ? <div className='form'>
			<h2>Update your task</h2>
			<input
				type="text"
				className="form-control"

				value={task}

				onChange={(e) => setState({ ...state, task: e.target.value })}
			></input>
			<button className="btn btn-warning m-2"
				onClick={() => updatetask()}>
				update</button>

		</div> :
			<>


				{tasklist.map((todo) => (

					<div className="card mx-3 my-3" key={todo.id}>

						<div className="card-header">
							Task
						</div>
						<div className="card-body ">

							<p className="card-text">{todo.task}</p>
							<div className='d-flex justify-content-end'>
								<button className="btn btn-danger " onClick={() => dispatch(deleteTask({ id: todo.id }))}>Delete</button>

								<button className="btn btn-warning ms-2" onClick={() => edit(todo.id, todo.task)} >Edit</button>
							</div>
						</div>
					</div>
				))}
				<button onClick={viewData}>View</button>
			</>
	);
};

export default TodoList;