import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';



const TodoLists=(props)=>{


    return(
    <>
    <div className="todo_style">
    {/* <i className="fa fa-times" aria-hidden="true" */}
    <DeleteIcon className="fa fa-times"
        onClick={()=>{
            props.onSelect(props.id);
        }}
    />
    <li>{props.text}</li>
    </div>
    </>
    );
};

export default TodoLists;
