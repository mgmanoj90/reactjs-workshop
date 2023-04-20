import React from 'react'
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid'

function Form({input,setInput, todos,setTodos,editTodo,setEditTodo}) {
    //console.log(input)
    const inputChange = (e)=>{
        setInput(e.target.value)
    }
    const submithandle = (e)=>{
     e.preventDefault()
     const newvalue = {id: uuidv4(), title: input, complited: false};
     if({title:""}){
        console.log("input is empty")
     }     
     setTodos(()=>[...todos, newvalue]);
     setInput(" ")
    }
  return (
    <div>
        <form onSubmit={submithandle}  className="row g-3" >
        <div className="col-auto">
            <input type="text" classNameName='form-control' value={input} onChange={inputChange} placeholder="enter todo name ..."  />
        </div>
        <div className="col-auto">  
        <button className='btn btn-primary'>submit</button>
        </div>
        </form>
        <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
    </div>
  )
}

export default Form