import React, {useState} from "react";
import { UseLocalStorage } from "./UseLocalStore";
const TodoContext= React.createContext()



function TodoProvider({children}){
    const [searchaValue, setSearchValue] = useState('')
    const {item: todos,
       saveItem: saveTodos,loading,error} = UseLocalStorage('TODOS_V1',[])
    const [openModal, setOpenModal] = useState(true)
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
    const searchedTodos = todos.filter(
      (todo)=>(todo.text.toLowerCase().includes(searchaValue.toLocaleLowerCase()))
    )
    const completeTodo = (text)=>{
      const newTodos = [...todos]
      const todoIndex =  newTodos.findIndex(
        (todo)=> todo.text = text 
      )
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed
      saveTodos(newTodos)
    }
    const deleteTodo = (text)=>{
      const newTodos = [...todos]
      const todoIndex =  newTodos.findIndex(
        (todo)=> todo.text = text 
      )
      newTodos.splice(todoIndex,1)
      saveTodos(newTodos)
    }


    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchaValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}