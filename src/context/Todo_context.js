import { createContext ,useContext} from "react";

 export const Todocontext = createContext({
    todos:[
      
    ],

     addTodo: (todo)=>{},
     deleteTodo: (id)=>{},
     updateTodo :(id,todo)=>{},
     toggleCompleted: (id)=>{},

 })


 export  const usetodo = ()=>{
    return useContext(Todocontext);
 }


 export const TodoProvider = Todocontext.Provider;
