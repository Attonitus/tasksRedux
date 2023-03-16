import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: 'lavar los platos',
        description: 'necesito lavar los platos',
        id: 1,
        done: false
    },
    {
        title: 'recoger la cama',
        description: 'hoy en la tarde',
        id: 2,
        done: "true"
    },
]

export const taskSlice = createSlice({
    name: 'taks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find( task => task.id === action.payload )
            if(taskFound){
                state.splice(state.indexOf(taskFound), 1)
            }
        }
        
    }
})

export const {addTask, deleteTask} = taskSlice.actions

export default taskSlice.reducer