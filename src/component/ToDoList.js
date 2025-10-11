import React, { useState } from 'react';

export const ToDoList = () => {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);
    const [editIndex, setEditIndex] = useState(null)


    const handleClick = () => {
        if (editIndex === null) {
            setTodo([...todo,value]);
            setValue("")
        } else {
            let updatedTodo = [...todo];
            updatedTodo[editIndex] = value;
            setTodo(updatedTodo);
            setEditIndex(null);
            setValue("")
        }
    }

    const handleEdit = (item, index) => {
        setValue(item);
        setEditIndex(index); 
    }
    return <>
    <input type='text' placeholder="search..." value={value} onChange={(e) => {
        setValue(e.target.value)
    }}/>
    <button onClick={handleClick}>{(editIndex === null) ? 'Add to List':'upadte the input'}</button>
    {
        todo && todo.map ((item, i) => (
            <div key={i} style={{display:"flex", justifyContent:"center"}}>
                <p>{item}</p>
                <button onClick={() => {
                    handleEdit(item,i)
                }}>Edit</button>
                
            </div>
        ))
    }
    </>
}