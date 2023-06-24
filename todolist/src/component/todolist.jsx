import React from 'react'
import { useState } from 'react'


export default function Todolist() {
  


let [todoInput, updateInput] = useState()

let [todoList, updateTodos] = useState(
      [
            {
                  id: 1,
                  task: 'Learn React'

            },
           
      ]
)

let nextId = 3

function addNewTodo() {

      if (todoInput == "") {
            alert("Add some task")
      }
      else {

            let newTodos = [
                  ...todoList,
                  {
                        id: nextId++,
                        task: todoInput

                  }
            ]
            updateTodos(newTodos);
            updateInput("")
      }

}

function deleteTodo(id) {
      let filteredTodos = todoList.filter(
            (todo) => {
                  return todo.id != id

            }
      )
      updateTodos(filteredTodos)



}


return (
        <div className='todobox'>  
      <div className="container mt-5 w-50">
            <h3 className='text-center'>Todolist Apllication</h3>
            <div className="input-group">
                  <input className="form-control" onChange={(e) => {
                        let task = e.target.value;
                        updateInput(task)

                  }} type='text' value={todoInput} />
                  <button onClick={() => {
                        addNewTodo()
                  }} className="btn btn-primary">Add</button>
            </div>
            <ul className="list-group mt-4">
                  {
                        todoList.map(
                              (todo) => {
                                    return (
                                          <li key={todo.id} className="list-group-item">
                                                <p>{todo.task}</p>
                                                <button onClick={() => {
                                                      deleteTodo(todo.id)
                                                }}
                                                 className="btn"><i class="bi bi-trash"></i></button>
                                          </li>
                                    )
                              }
                        )
                  }


            </ul>
      </div>
      </div>
)



    

}
