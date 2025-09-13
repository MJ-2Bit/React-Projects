import AddToDo from "./components/AddTodo"
import AppName from "./components/AppName"

import "./App.css"
import TodoItems from "./components/Todoitems"
import { useState } from "react"
import WelcomeMsg from "./components/welcomemsg"

function App() {

  
  const [todoItems, setTodoItems] = useState([]);


 const handleonNewItem = (itemName, itemDueDate) => {
  setTodoItems((currValue) => [
    ...currValue,
    {name: itemName, date:itemDueDate},
  ]);
 }
       
 
 const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter((item)=> item.name !== todoItemName)
  setTodoItems(newTodoItems);

 }

  return  <center className="to-do-container">
    <AppName></AppName>
    <AddToDo onNewItem={handleonNewItem}></AddToDo>
   {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg> }
    <TodoItems todoItems={todoItems} onClickDelete={ handleDeleteItem}></TodoItems>
    
  </center> 
 
}

export default App
