import React, { useState } from "react";
import ItemForm from "./ItemForm";
import '../Style_sheets/todoList.css';
import TodoItem from "./TodoItem";

function TodoList() {

    const [items, setItems] = useState([
        {
            key: "1",
            id: 1234,
            text: "Sacar basura",
            completed: false,
            deleteItem: false,
            itemCompleted: false
        },
        {
            key: "2",
            id: 5678,
            text: "Lavar ropa",
            completed: false,
            deleteItem: false,
            itemCompleted: false
        }
    ]);

    const addItem = item => {
        if(item.text.trim()) {
            item.text = item.text.trim();
            const updatedItems = [item, ...items]; 
            setItems(updatedItems);
        }
    };

    const deleteItem = id => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    }

    const itemCompleted = id => {
        const updatedItems = items.map(item => {
            if(item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
        setItems(updatedItems);
    }

    return (
        <>
            <ItemForm onSubmit={addItem}/>
            <div className='todoList-container'>
                {
                    items.map((item) =>
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        deleteItem={deleteItem}
                        itemCompleted={itemCompleted}
                    />
                    )
                }
            </div>
        </>
    );
}

export default TodoList;