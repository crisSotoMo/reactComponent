import React from 'react';
import '../Style_sheets/item.css';
import { AiOutlineCloseSquare } from "react-icons/ai";

function TodoItem({ id, text, completed, itemCompleted, deleteItem }) {
    return (
        <div className={completed ? 'item-container completed' : 'item-container'}>
            <div 
            className='item-text'
            onClick= {() => itemCompleted(id)}>
                {text}
            </div>
            <div 
            className='item-checkbox-container'
            onClick={() => deleteItem(id)}>
                <AiOutlineCloseSquare className='item-checkbox' />
            </div>
        </div>
    )
}

export default TodoItem;