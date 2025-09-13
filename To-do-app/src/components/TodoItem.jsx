import { MdOutlineDeleteOutline } from "react-icons/md";


function ToDoItem ({todoName,todoDate ,onClickDelete}){
return  <div className="container ">
<div className="row kg-row">
  <div className="col-6">
  {todoName}
  </div>
  <div className="col-4">
   {todoDate}
  </div>
  <div className="col-2 "><button type="button" className="btn btn-danger kg-btn"
  onClick={()=> onClickDelete(todoName)}><MdOutlineDeleteOutline /></button>
  </div>
</div>
</div>
}
export default ToDoItem;