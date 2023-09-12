
import './TodoSearch.css'
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch(){
    const {   searchaValue,
        setSearchValue,} = useContext(TodoContext)
   
    return (
        <input
        onChange={(event)=>{
            setSearchValue(event.target.value)
        }}
        value={searchaValue}
        className='TodoSearch'
         placeholder="Cortar Cebolla"/>
   
    );
  }

  export {TodoSearch};