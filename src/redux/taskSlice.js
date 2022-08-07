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
    getData:(state)=>{
      
      const db=request.result;
      
      const data=db.transaction("tasks", "readwrite").objectStore("tasks").getAll();
      // const arraydata=data.result
      data.transaction.oncomplete = function(event) {
        console.log(data.result);
        
        return data.result
      };
      // console.log(data.result)
    
    },
    updateData:(state,action)=>{
      console.log(action.payload);
      state.tasks =  state.tasks.map((item) => 
      item.id === action.payload.id ? action.payload : item);
      const db=request.result;
   
      const data=db.transaction("tasks", "readwrite").objectStore("tasks");
      const getRequ=data.get(action.payload.id)
      console.log(getRequ);
      getRequ.onsuccess = ()=> {
        const taskrequest = getRequ.result;
        console.log(action.payload);
      const updateRequest = data.put(action.payload);
      updateRequest.onsuccess = () => {

        console.log("updated")

    }
    }
  
    }
  
  },
 
})

// Action creators are generated for each case reducer function
export const {addTask, deleteTask,getData,updateData } = taskSlice.actions

export default taskSlice.reducer