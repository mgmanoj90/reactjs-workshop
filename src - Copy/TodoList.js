import React from 'react'

function TodoList({todos,setTodos,setEditTodo}) {
    // const handleComplited = (todo)=>{
    //     todo.preventDefault();
    //     setTodos(todos.map((item)=>{
    //         if(item.id === todo.id){
    //             return {...item, complited: !item.complited}
    //         }
    //         return item
    //     }))
    // }
const inputdelethandle = ({id}) =>{
        const newTodoList = todos.filter((item)=>{
            return item.id !== id;
        });
        setTodos(newTodoList)
    }

const handleUpdate =({id})=>{
    //   id.preventDefault()
      const findTodo = todos.find((todo)=>todo.id===id);
      setEditTodo(findTodo)
}
  return (
        <div>
            {todos.map((todo,i)=>{
                return(
                    <li key={todo.id}>
                        <form className="row g-3">
                        <div clasName="col-auto">
                            <input type="text" clasNameName='form-control' onChange={e=>e.preventDefault()} value={todo.title}   />
                        </div>
                        <div clasName="col-auto">
                            <button 
                                 clasNameName='btn btn-primary'
                                 onClick={()=>handleUpdate(todo)}>Update
                        </button>
                        <div clasName="col-auto"> 
                            <button clasNameName='btn btn-primary' onClick={()=>inputdelethandle(todo)}>Delete</button>
                        </div>
                        {/* <div clasName="col-auto">
                            <button clasNameName='btn btn-success' 
                            onClick={()=>handleComplited(todo)}>Complited</button>
                        </div> */}
                        
                         </div>
                        </form>
                    </li>
                )
            })}
        </div>
  )
}

export default TodoList