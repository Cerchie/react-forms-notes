import React, {useState} from 'react';
import Item from './Item'
import NewItemForm from "./NewItemForm"
import {v4 as uuid} from 'uuid';

const ShoppingList = () => {
const INITIAL_STATE = [
    {id: uuid(), name: 'pb', qty: 2},
    {id: uuid(), name: 'whole milk', qty: 5}
]
const [items, setItems] = useState(INITIAL_STATE)
const addItem = (newItem) => {
setItems(items => [...items, {...newItem, id: uuid() }])
}
return (
    <div>
        <h3>Shopping List</h3>
        <NewItemForm addItem={addItem}/>
        <div>
            {items.map(({id, name, qty}) => <Item key={id} id={id} name={name} qty={qty} key={id}/>)}
        </div>
    </div>
)
}

export default ShoppingList;