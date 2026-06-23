import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, removeTask } from "../../reudux/reducers/todos";
import { IoMdClose } from "react-icons/io";

export default function TodoList({day }){
	const inputRef = useRef()
	const dispatch = useDispatch()
	const todos = useSelector(state => state.todos.todos.filter((item) => item.day === day)[0]
	)
	const dayId = todos?.id

	function handleAddTask(e){
		e.preventDefault()
		let newData = []
		const task = new FormData(e.target)

		const newTask = {
			id:Math.round(Math.random() * 1000)+task.get("task"),
			name: task.get("task"),
			completed: false
		}

		if(todos?.list.length > 0) newData = [...todos.list]
		newData.push(newTask)

		const todoList = {
			day:day,
			id:todos.id,
			date: todos.date || new Date().toLocaleDateString(),
			list:newData
		}

		dispatch(addTask(todoList))
		inputRef.current.value = ""

	}

	function handleClickTarget(id){
		dispatch(editTask({id, dayId}))
	}

	function handleRemoveTask(id){
		dispatch(removeTask({id, dayId}))
	}

	return (
		<div className="flex flex-col gap-2 h-fit w-[90%] text-start">
			<p className="relative -top-0.5">June, 14 2026 - 10:10am</p>
			<ul className="flex flex-col w-full mt-1 gap-xp text-[13px]">
				{todos?.list.map((item, index) => (
					<li 
					key={index}
					className="flex items-center gap-2 w-full justify-between">
						<div className="flex items-center gap-2 w-[80%] justify-start">
							<input 
							onClick={() => handleClickTarget(item.id)}
							defaultChecked={item.completed}
							type="checkbox" id={`todo[${day}-${index+1}]`} name={`todo[${index+1}]`}
							className="peer accent-(--active-bg) relative border-none"/>
							<label htmlFor={`todo[${day}-${index+1}]`}className="text-left peer-checked:line-through 
							peer-checked:text-(--text-active) w-full">{item?.name}</label>
						</div>
						<button 
						onClick={() => {handleRemoveTask(item.id)}}
						className="cursor-pointer">
							<IoMdClose/>
						</button>
					</li>
				))}
			</ul>

			<div className="mt-4">
				<form onSubmit={handleAddTask}>
					<input
					ref={inputRef}
					className="outline-none"
					name="task"
					id="task"
					placeholder="Add new task.." 
					type="text" />
				</form>
			</div>

		</div>		
	)
}