import { useSelector } from "react-redux"
import Days from "./components/Days"

export default function TodolistDays(){
  const data = useSelector(state => state.todos.todos)

	return(
    <div className="flex justify-center items-center h-screen">
      <div className=" w-full md:w-[80%] h-full md:h-140 bg-(--content-bg) flex flex-col-reverse overflow-scroll">
        <ul className="flex flex-col h-full overflow-scroll">
          {data.map((item) => (
            <Days 
            key={item.id}
            day={item.day}>
              <h1 className="relative top-1.5 text-3xl md:text-2xl md:my-5">{item.day}</h1>
            </Days>
          ))}
        </ul>
      </div>
    </div>		
	)
}