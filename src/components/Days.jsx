import { useState, useRef } from "react"
import { IoMdClose } from "react-icons/io";
import TodoList from "./todolist/TodoList";
import { useSelector } from "react-redux";

export default function Days({day, children}){
	const todolist = useSelector(state => state.todos.todos)
	const [expand, setExpand] = useState(false)
	const list = useRef()
	
	function expandList(){
		if(!expand) {
			setExpand(true)
			
			list.current.className = "h-fit w-full border-b border-(--border) transition delay-150 duration-300 ease-in-out"
		}
	}

	function closeList(){
		list.current.className = "h-30 w-full border-b border-(--border) transition delay-150 duration-300 ease-in-out"
		setExpand(false)
	}

	return(
		<li ref={list}
			className="h-30 w-ful border-b border-(--border) transition delay-150 duration-300 ease-in-out">
			<button 
				type="button"
				onClick={(e) => {expandList(e)}}
				className="cursor-pointer h-full w-full flex flex-col justify-start pl-8 pt-4 pb-7 items-start">
					<div className="flex items-center w-full pr-5 justify-between">
						{children}
						{expand &&
							<div
							onClick={() => {closeList()}}
							className="relative w-fit h-fit z-2 top-2">
								<IoMdClose size={30}/>
							</div>
						}
					</div>
					{ expand && <TodoList day={day} expand={expand} setExpand={setExpand}/> }
				</button>
		</li>		
	)
}