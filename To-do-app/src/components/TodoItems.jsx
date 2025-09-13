import ToDoItem from "./TodoItem"

const TodoItems = ({todoItems, onClickDelete}) => {
 return <div className="items-container">
  {
  
  todoItems.map(item => 
  
  <ToDoItem todoName={item.name} todoDate={item.dueDate} 
  onClickDelete={onClickDelete}></ToDoItem>)}
  
 </div>
} 
export default TodoItems

//<ToDoItem todoName={item.name} todoDate={item.dueDate}></ToDoItem>