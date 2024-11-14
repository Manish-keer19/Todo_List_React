import React ,{useEffect, useState}from 'react'
import { TodoProvider } from './context/Todo_context';
import TodoForm from './component/Todoform';
import TodoItem from './component/Todoitem';
import { json } from 'react-router-dom';


function App() {

   
    
  const [todos, setTodos] = useState([]);






   
   const addTodo = (todo)=>{
       
    setTodos([...todos,{id: Date.now(), todo, iscompleted :false}])
    // console.log(todos)

   }
   const deleteTodo = (id)=>{ 
     
   let newtodods =   todos.filter(item=> (item.id!=id) )
   setTodos(newtodods);

   }
   const updateTodo = (id, todo)=>{
       setTodos(todos.map(item=>
         item.id==id?{...item, item:todo}:item
       ));
   }

   const toggleCompleted = (id)=>{
      setTodos((prev)=> prev.map((todo)=>todo.id===id?{...todo,iscompleted:!todo.iscompleted}:todo))
   }
   
   
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  



useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos && todos.length > 0) {
    setTodos(todos);
  }
}, []);

useEffect(() => {
  console.log(todos)
}, [todos])



  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleCompleted}}>

    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {
                        
                        todos.map(todo=>{
                          return(
                          <div key={todo.id}>
                            <TodoItem todo={todo}/>
                          </div>
                          )
                        })
                      } 
                    </div>
                </div>
            </div>
  
    </TodoProvider>
  )
}

export default App
