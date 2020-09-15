import React, { useState,useEffect,useRef } from "react";

function Forms(props) {
const [input,setinput] = useState('')

const inputref = useRef(null);
useEffect(()=>{
  inputref.current.focus();
  
});
  const handlechange =(e) =>{
    setinput(e.target.value);
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setinput('');
  };
  return (
    <div className="todo-form" onSubmit={handlesubmit}>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handlechange}
          ref={inputref}
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default Forms;
