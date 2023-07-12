import { useState } from "react";
import {v4 as uuid} from 'uuid'
import ShoppingListForm from './ShoppingForm'
export default function ShoppingList() {
    const [items, setItems] = useState([])
    const addItem = function(item){
        setItems(currItems =>{return [...currItems,
            {...item,id:uuid()}
        ]})
    }
    return <div>
        <div>
            <ShoppingListForm addItem = {addItem}/>
        </div>
        <div>
            <h3>Display</h3>
            <ul>
                {items.map(i => (
                    <li key={i.id}>Product :- {i.product} || Quantity :- {i.quantity}</li>
                ))}
            </ul>
        </div>
    </div>
}