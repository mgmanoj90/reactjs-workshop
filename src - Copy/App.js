import { useState } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';


function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="App">
      <div className='container auto'>
      <Header/>
      <Form 
        
        input = {input}
        setInput ={setInput}
        todos= {todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
    </div>
  );
}

export default App;
