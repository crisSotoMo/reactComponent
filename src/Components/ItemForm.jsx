import React, { useState }  from "react";  
import '../Style_sheets/itemForm.css';
import { v4 as uuidv4 } from 'uuid';

function ItemForm(props) {

    const [input, setInput] = useState([]);

    const handleChanges = change => {
        setInput(change.target.value);
    }

    const handleAdd = itemsToAdd => {
        itemsToAdd.preventDefault();
        const itemToAdd = {
            id: uuidv4(),
            text: input,
            completed: false
        };

        props.onSubmit(itemToAdd);
    }

    return (
        <form 
        className='item-form'
        onSubmit={handleAdd}>
            <input
            className='item-input'
            type='text'
            placeholder='Write Item'
            name='text'
            onChange={handleChanges}
            />
            <button className='item-button'>
                Add
            </button>
        </form>
    )
}

export default ItemForm;