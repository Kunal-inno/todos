import React, { useState } from "react";
import "./Todoinpu.css";
// import axios from "axios"

const Todoinpu = () => {
  const ApiOfTodo = [
    {
      id: 0,
      name: "Buy ticket",
      done: true,
    },
    {
      id: 1,
      name: "Book hotel",
      done: false,
    },
    {
      id: 2,
      name: "Book cab",
      done: true,
    },
  ];


   const[name,setname]=useState("")
   const[todo,settodo]=useState(ApiOfTodo)
   const HandleAddTodo =(newApiTodo) =>{
    const newTodoList=[...todo,newApiTodo]
     settodo(newTodoList)
   }
    // const[Complete,setComplete]=useState(false)

    const HandleSubmit =(e)=>{
        e.preventDefault()
        const newApiTodo={id:Math.random(),name:name,done:false}
        // alert(name)
        HandleAddTodo(newApiTodo)
        setname("")

    }

    const removeTodo = (id)=>{
        const newTodoList= todo.filter(task=>task.id!==id)
        settodo(newTodoList)
    }

    const HandleCheckbox =(id)=>{
      const newTodoList = todo.map(task=>{
        if(task.id===id)
        return {...task,done:!task.done}
        return task
      })
      settodo(newTodoList)
    }

  return (
    <>
      <h2 className="heading">Add your todo here 	&#128071;</h2>
      <div className="inpudiv">
        <form onSubmit={HandleSubmit}>
          <input
            className="inputarea"
            type="text"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            placeholder="Add your task"
            required
          />
          <button className="btntoadd" type="submit">
            click to add in your TODO list
          </button>
        </form>
      </div>
      <div className="inpudiv">
        <div className="list">
          {todo.map((task) => {
            return (
              <div className="maplist" key={task.id}>
                <input className="inputlist" type="checkbox" checked={task.done} onChange={() =>HandleCheckbox(task.id)}></input>
                   <span className="completed">{ task.done? <p>Completed</p> : null}</span>
                <div>{task.name}</div>
                <div className="del">
                  <button className="deletebtn" onClick={()=>{removeTodo(task.id)}}>Delete</button>
                </div>
                {/* <span>{ (Complete===true) ? <p>Completed</p> : <p>Not Completed</p>}</span>s */}
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="lastline"><h2>KEEP MAKING YOUR TASK &#128512;</h2></div> */}
      <div class="css-3d-text">KEEP MAKING YOUR TASK &#128512;</div>
    </>
  );
};

export default Todoinpu;
