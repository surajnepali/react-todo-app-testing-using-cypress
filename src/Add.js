import { useState } from "react"

export default function Add() {
    
    const [data, setData] = useState({
        add_todo: ""
    })

    return(
        <input 
            data-testid="todo-input"  
            value={data.add_todo} 
            onChange={(e) => setData(oldData => ({...oldData, [e.target.name]: e.target.value}))} 
            name="add_todo"
        />
    )
}