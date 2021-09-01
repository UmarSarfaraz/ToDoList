import React, { useState } from "react";
import TodoLists from "./TodoLists";
import AddIcon from '@material-ui/icons/Add';

const Ap=()=>{

    const[inputList,setInputList]=useState("");
    const[items,setItems]=useState([]);

    const itemEvent=(event)=>{
       setInputList(event.target.value);

    };

    const listOfItems=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputList];
        });
        setInputList("");

    };
    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElm,index)=>{
                return index!==id;

            });
        });

    };
    return(
        <>
       <div className="main_div">
           <div className="center_div">
               <br/>
               <h1>ToDo List</h1>
               <input type="text" placeholder="Add a Items"
               value={inputList}
                onChange={itemEvent}/>
               <button onClick={listOfItems}> <AddIcon/></button>

               <ol>
                   {/* <li>{inputList}</li> */}

                {  items.map((itemval,index)=>{
                       return<>
                       <TodoLists key={index}
                        id={index}
                       onSelect={deleteItems}
                        text={itemval}/>
                       </>
                       
                   })}
               </ol>
           </div>
       </div>
        </>
    );
};
export default Ap;

