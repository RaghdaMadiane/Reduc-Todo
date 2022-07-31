import { createSlice } from '@reduxjs/toolkit'
import {request} from '../IndexDB/indexedDB'
const initialState = {
  id:0,
  tasks:[],
  
}
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state,action) => {
      const list={
        id:state.id,
        task:action.payload
      }
    
      state.id++
      state.tasks=[...state.tasks, list]
      const db=request.result;
      const data=db.transaction("tasks", "readwrite").objectStore("tasks");
      data.add(list)

    },
    deleteTask: (state,action) => {
      const db=request.result;
   
      const data=db.transaction("tasks", "readwrite").objectStore("tasks");
      data.delete(action.payload.id)
     
     return{
      ...state,
      tasks : state.tasks.filter((index )=>{return (action.payload.id!==index.id )})
     }
    },
    getData:(state,action)=>{
      const db=request.result;
      console.log(action.payload);
      const data=db.transaction("tasks", "readwrite").objectStore("tasks");
      const results=data.getAll()
      console.log(results);

    }
  },
 
})

// Action creators are generated for each case reducer function
export const {addTask, deleteTask,getData } = taskSlice.actions

export default taskSlice.reducer