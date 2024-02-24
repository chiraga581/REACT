import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

const Todos = () => {
     const todos =  useSelector((state) => state.todos)
     const dispatch = useDispatch();

     return (
          
          <>
               <div>TODOS</div>
               <ul>
                    {todos.map((todo) => (
                         <li key={todo.id}
                              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded "
                         >
                              <div className="text-white">
                                   {todo.text}
                              </div>
                              <button onClick={()=>dispatch(removeTodo(todo.id))} className="text-red-600">X</button>
                         </li>
                    ))}
               </ul>
          </>

     )
}

export default Todos