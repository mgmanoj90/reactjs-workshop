
import './App.css';
import { useState } from 'react';
function App() {
  const [todo,setTodo] = useState("");
  const [todos,setTodos] =useState([]);
  const [ editId,setEditId] = useState(0)
  const handleSubmit = (e)=>{
      e.preventDefault()
      
      if(editId){
        const editTodo = todos.find((i)=>i.id === editId)
        const updatedTodos = todos.map((t)=>
        t.id === editTodo.id 
          ? (t = {id: t.id, todo})
          :{id:t.id, todo:t.todo}
        );
        setTodos(updatedTodos);
        setEditId(0)
        setTodo('');
       
        
      }
      
   
        setTodos([{id:`${todo}- ${Date.now()} `,todo}, ...todos])
        setTodo('')
      
      
      
      
  }
  const handleDelete = (id)=>{
    const newtodolist = todos.filter((item)=>{
      return item.id !== id
    });
    setTodos([...newtodolist])
  }
  const handleEdit = (id)=>{
    const neweditTodo = todos.find((i)=>i.id === id)
     setTodo(neweditTodo.todo);
     setEditId(id)
  }
  return (
    <div className="App">
      <div className='container'>
      <h1>Todo</h1>
      <form  className='todoform'>
        <input type="text" onChange={(e)=>setTodo
        (e.target.value)} placeholder="enter todo" value={todo} />
        
        <button onClick={handleSubmit} type='submit' >{editId ?<span>Edit</span> : <span>GO</span>}</button>
      </form>
      <ul className='alltodo'>
        {todos.map((t)=>(
        <li className='singletodo'><span key={t.id} className='todotext'>{t.todo}</span>
          <button onClick={()=>handleEdit(t.id)}>edit</button>
          <button onClick={()=>handleDelete(t.id)}>delete</button>
        </li>
        ))}
        
      </ul>
    </div>
    </div>
  );
}

export default App;
