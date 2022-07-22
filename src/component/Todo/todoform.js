
import { useState } from 'react';
import {  useDispatch } from 'react-redux'
import { addTask } from '../../redux/taskSlice'

function Todoform() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const formAdd=(e)=>{
e.preventDefault();
dispatch(addTask(input));
setInput('')
    }
    return (
        <div className='d-flex justify-content-center text-center' >
            <div className='w-50  '>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Add task"
                    value={input}
                    
                    onChange={(e) => setInput(e.target.value)}
                ></input>
                <button
                    aria-label="Increment value"
                    onClick={formAdd}
                    className="btn btn-primary mt-2">
                    ADD
                </button>


            </div>
        </div>
    )
}
export default Todoform;