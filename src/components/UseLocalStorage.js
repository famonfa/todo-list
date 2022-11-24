import { useState, useEffect } from "react";

const UseLocalStorage = (itemName, initialValue) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [todos, SetTodos] = useState(initialValue)
  
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageTodos = localStorage.getItem(itemName)
        let parsedTodos;
      
        if (!localStorageTodos) {
      
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedTodos = initialValue
        } else {
          parsedTodos = JSON.parse(localStorageTodos)
        }
      
        SetTodos(parsedTodos)
        setLoading(false)
          
        } catch(error){
          setError(error)
        }
      }, 1000)
    }, initialValue)
  
    const saveTodos = (newTodos) => {
     try {
      const stringified = JSON.stringify(newTodos)
      localStorage.setItem(itemName, stringified)
      SetTodos(newTodos)
     }catch(error) {
      setError(error)
     }
    }
  
    return {
      todos,
      saveTodos,
      loading,
      error
      
  }
  
  }

  export default UseLocalStorage