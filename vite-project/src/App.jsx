import { useState } from 'react'
import './App.css'
function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: 'id1', name: "Hốt cớt mèo" },
    { id: 'id2', name: "Cho mèo ăng" },
    { id: 'id3', name: "Ăng cít, cít chần,chít cần" }
  ]);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClickBtn = () => {
    let todoId = getRandomInt(4, 2003);
    let todoItem = {
      id: 'id' + todoId, name: todo
    }
    setListTodo([...listTodo, todoItem])
    setTodo("");
  }

  const handleDelete = (id) => {
    const newArray = listTodo.filter(item => item.id !== id);
    setListTodo(newArray);
  }

  const handleEdit = (id, newName) => {
    const updatedArray = listTodo.map(item => {
      if (item.id === id) {
        return { ...item, name: newName };
      }
      return item;
    });
    setListTodo(updatedArray);
  }

  return (
    <>
      <div>
        <h1>Todo App Test</h1>
        <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} />
        <button onClick={handleClickBtn}>+</button>
        <div>List todo:</div>
        <ul>
          {listTodo.map(item => {
            return (
              <div key={item.id}>{item.name}
                <button onClick={() => handleEdit(item.id, prompt("Enter new name"))}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>x</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
