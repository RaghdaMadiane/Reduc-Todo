import { createSlice } from '@reduxjs/toolkit'

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
        task:action.payload.task
      }
    
      state.id++
      state.tasks=[...state.tasks, action.payload]

    },
    deleteTask: (state,action) => {
  
     return{
      ...state,tasks : state.tasks.filter((index ,i)=>{return (action.payload.id!== i)})
     }
    },
  },
})

// Action creators are generated for each case reducer function
export const {addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer