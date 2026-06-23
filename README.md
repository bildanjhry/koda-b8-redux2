# Todo List

Program Todo List Menggunakan Redux Toolkit dan Redux Persist

### Tech Stacks:
- React Js v19x.x.x
- TailwindCSS v4.X.X
- Vite v4.x.x
- Eslint v10.x.x
- Redux v8.0.0

### Redux Store Provider:

```jsx
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer
})

export const persistor = persistStore(store)
```

Fitur dari program ini terdapat 3 aksi yang bisa digunakan, Tambah Task, Edit dan Hapus, semua aksi ini dilakukan dengan reducer action Redux

### Tambah task:
```js
addTask: function(state, action){
	// find index of day
	const foundId = state.todos.findIndex((item) => 
	item.id === action.payload.id)
	state.todos.splice(foundId, 1, action.payload) // splicing with new item
}
```

### Edit task:
```js
editTask: function(state, action){

	// find index of day
	const foundId = state.todos.findIndex((item) => 
	item.id === action.payload.dayId)

	// find todolist by day
	const filtered = state.todos.filter((item) => 
	item.id === action.payload.dayId)[0]

	// selecting array of list of todo with maches id
	const todolistItem = filtered.list.filter((item) => 
	item.id === action.payload.id)[0]
	const foundListId = filtered.list.findIndex((item) => 
	item.id === action.payload.id)
		
	// slicing new list
	filtered.list.splice(foundListId, 1, 
	{...todolistItem, completed:(!todolistItem.completed)})
	state.todos.splice(foundId, 1, 
	{...state.todos[foundId], list:[...filtered.list]})
}
```

### Hapus Task:
```js
removeTask: function(state, action){
	// find index of day
	const foundId = state.todos.findIndex((item) => 
	item.id === action.payload.dayId)
	const filtered = state.todos.filter((item) => 
	item.id === action.payload.dayId)[0]

	// filtering rest of the list that does not matches
	const todolist = filtered.list.filter((item) => 
	item.id !== action.payload.id)
	state.todos.splice(foundId, 1, 
	{...state.todos[foundId], list:todolist}) // splicing with new list item
}
```

### Preview demo:
![alt text](/src/assets/todolistapp.gif)
