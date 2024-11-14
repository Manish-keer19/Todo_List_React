import React,{useState,useEffect} from "react";
import { usetodo } from "../context/Todo_context";

function TodoForm() {
    useEffect(() => {
        console.log("todoform is rendered");
      }, )

     const  {addTodo}  =usetodo();

     const [todo, setTodo] = useState("");

     const handlesubmit = (e)=>{
        e.preventDefault()

        addTodo(todo);
        setTodo("");


        
     }
    

    return (
        <form  className="flex" onSubmit={(e)=>{
            handlesubmit(e)
        }}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

