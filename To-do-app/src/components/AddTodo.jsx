import { useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddToDo ({onNewItem}){



const todoNameElement= useRef("");

const todoDateELement= useRef("");


const handleAddButtonClick = (event) => {
  event.preventDefault();
  const todoName = todoNameElement.current.value;
  const todoDate = todoDateELement.current.value;
  todoNameElement.current.value="";
  todoDateELement.current.value="";
  onNewItem( todoName, todoDate )
};
 


  return <div className="container text-center">
   <form className="row kg-row"
   onSubmit={handleAddButtonClick}>
  <div className="col-6">
    <input type="text" 
    ref={todoNameElement}
    placeholder="Enter To here" 
   />
  </div>
  <div className="col-4">
    <input type="date"
    ref={todoDateELement}
/>
  </div>
  <div className="col-2 "><button type="submit" className="btn btn-success kg-btn"><IoIosAddCircle /></button></div>
</form>
</div>

}

export default AddToDo;