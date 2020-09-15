import React,{useState} from 'react'
import Forms from './forms'
import Todo from './todo';


function Todolist() {
const [todos,settodos] = useState([]);


    const addtodo =(todo)=>{
        if(!todo.text){
            return;
        };
        const newtodos = [todo, ...todos];
        settodos(newtodos);
        console.log(todos);
    };

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;

            }
            return todo;
        })
        settodos(updatedTodos);
    }
    const removeTodo = id =>{
        const removearr = [...todos].filter(todo => todo.id !==id);
        settodos(removearr);

    }
    const updateTodo = (id,newvalue)=>{
        if(!newvalue.text){
            return
        }
        settodos(prev =>prev.map(item=>item.id===id ? newvalue : item));
    }
    return (
        <div>
            <h1>To Do</h1>
            <Forms onSubmit={addtodo} />
            <Todo 
            todos ={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}

export default Todolist
// || /^\s*$./test(todo.text)