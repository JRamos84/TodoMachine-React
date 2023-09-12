import { useState, useEffect } from "react"

function UseLocalStorage(itemName, initialValue){

  
  const [item,setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const saveItem = (newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem))
    setItem(newItem)
  }
  
  useEffect(()=>{
  setTimeout(()=>{
    try{
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItem
      
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue))
        parsedItem = initialValue
      }else{
        parsedItem = JSON.parse(localStorageItem)
        setItem(parsedItem)
      }
  
      setLoading(false)
    }catch(error){
      setLoading(false)
      setError(true)
    }

  },1000)

    },[itemName,initialValue])
  
    return{
      item,
      saveItem,
      loading,
      error}
  }
  
  export {UseLocalStorage}

  // const defaultTodo = [
//   {text: 'Cortar Cebolla', completed:false},
//   {text: 'tomar el curso', completed:true},
//   {text: 'hacer la cama', completed:true}

// ]

// localStorage.setItem('TODOS_V1',defaultTodo)
//localStorage.removeItem('TODOS_V1')
