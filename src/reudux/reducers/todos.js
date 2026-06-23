import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [
	{
		id:"1s",
		date:"",
		day:"SUNDAY",
		list:[]
	},
	{
		id:"2m",
		date:"",
		day:"MONDAY",
		list:[]
	},
	{
		id:"3t",
		date:"",
		day:"TUESDAY",
		list:[]
	},
	{
		id:"4w",
		date:"",
		day:"WEDNESSDAY",
		list:[]
	},
	{
		id:"5t",
		date:"",
		day:"THURSDAY",
		list:[]
	},
	{
		id:"6f",
		date:"",
		day:"FRIDAY",
		list:[]
	}
]
}

const reducers = {
	addTask: function(state, action){
		const foundId = state.todos.findIndex((item) => item.id === action.payload.id)
		state.todos.splice(foundId, 1, action.payload) // splicing with new item
	},

	editTask: function(state, action){
		const filtered = state.todos.filter((item) => item.id !== action.payload.id)
		state.todos = [...filtered, action.payload.list]
	},

	removeTask: function(state, action){
		const foundId = state.todos.findIndex((item) => item.id === action.payload.id)
		state.todos.splice(foundId, 1) // remove by splicing it
	}
}

const todos = createSlice({
	name:"todos",
	initialState,
	reducers
})

export default todos.reducer
export const {addTask, editTask, removeTask} = todos.actions