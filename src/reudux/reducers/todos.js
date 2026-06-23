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
	},
	{
		id:"7s",
		date:"",
		day:"SATURDAY",
		list:[]
	}
]
}

const reducers = {
	addTask: function(state, action){
		// find index of day
		const foundId = state.todos.findIndex((item) => item.id === action.payload.id)
		state.todos.splice(foundId, 1, action.payload) // splicing with new item
	},

	editTask: function(state, action){
		// find index of day
		const foundId = state.todos.findIndex((item) => item.id === action.payload.dayId)
		const filtered = state.todos.filter((item) => item.id === action.payload.dayId)[0]
		const todolistRest = filtered.list.filter((item) => item.id !== action.payload.id)
		const todolistItem = filtered.list.filter((item) => item.id === action.payload.id)[0]
		state.todos.splice(foundId, 1, {...state.todos[foundId], list:[...todolistRest, {...todolistItem, completed:true}]})
	},

	removeTask: function(state, action){
		// find index of day
		const foundId = state.todos.findIndex((item) => item.id === action.payload.dayId)
		const filtered = state.todos.filter((item) => item.id === action.payload.dayId)[0]
		const todolist = filtered.list.filter((item) => item.id !== action.payload.id)
		state.todos.splice(foundId, 1, {...state.todos[foundId], list:todolist}) // splicing with new list item
	}
}

const todos = createSlice({
	name:"todos",
	initialState,
	reducers
})

export default todos.reducer
export const {addTask, editTask, removeTask} = todos.actions