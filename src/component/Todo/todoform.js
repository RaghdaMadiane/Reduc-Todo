
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { addTask } from '../../redux/taskSlice';
import { getAll } from '../../redux/taskSlice'
import {  useNavigate } from 'react-router-dom';
import { request } from '../../IndexDB/indexedDB';

function Todoform() {
   
    const [input, setInput] = useState("");
    const { user: currentUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch()
   
    const formAdd = (e) => {
        e.preventDefault();

        if (currentUser) {
            if(input.length > 1){
           dispatch(addTask(input));
            setInput('') }
        }else{
            navigate('/login')
        }


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