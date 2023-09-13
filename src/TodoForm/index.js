import React, {useContext, useState} from "react"
import {TodoContext} from '../TodoContext'
import './ToofoForm.css'
function TodoForm(){

    const {
        setOpenModal,
        addTodo
    } = useContext(TodoContext)
    const [newTodoValue, setTodoValue] = useState('')

    const onSubmit = (event)=>{
        event.preventDefault()
        newTodoValue && addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = ()=>{
        setOpenModal(false)
    }

    const onChange = (event)=>{
        setTodoValue(event.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar Cebolla para el almuerzo"
            />

          <div className="TodoForm-buttonContainer">
          <button
          type="button"
            className="TodoForm-button
            TodoForm-button--cancel"
            onClick={onCancel}
            >
                Cancelar
            </button>

            <button
            type="submit"
            className="TodoForm-button
            TodoForm-button--add"
            >
                Añadir
            </button>

          </div>

            
        </form>
    )}
export {TodoForm}