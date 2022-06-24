import React from 'react'
import { useState } from 'react'


const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be left blank")
        }
        AddTodo(title, desc);
    }
    return (
        <div className = "container my-3">
            <h3>Add a Todo</h3>
        <div>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
                    className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}
                    className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-dark">Add a Todo</button>
            </form>
        </div>
        </div>
    )
}

export default AddTodo

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);