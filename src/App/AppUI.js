import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';

function AppUI(){
  const { 
    completedTodos,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal
  } = useContext(TodoContext)

    return (
        <>
    
          <TodoCounter />
          <TodoSearch />
          {(totalTodos === completedTodos) & (totalTodos > 0)  ? <h1>Felicidades!! no te quedas TODOS</h1> : null}      
          <TodoList>
            {loading && <TodosLoading/>}
           {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>   }
           {
           searchedTodos.map(todo => (
           <TodoItem 
               key={todo.text}
               text = {todo.text}
               completed = {todo.completed}
               onComplete ={()=>completeTodo(todo.text)}
               onDelete ={()=>deleteTodo(todo.text)}/>))}
            </TodoList>
              
        


           
          <CreateTodoButton/>
          {openModal && 
          <Modal>
          la funcionalidad 
          </Modal>}
           
         </>)}
  
      



export  {AppUI}