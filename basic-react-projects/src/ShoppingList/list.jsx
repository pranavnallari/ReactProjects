import './list.css'
import ShoppingListItem from './ShoppingListItem'

export default function List({ items }) {

    return <div className="List">
        <h1>Shopping Cart List</h1>
        <ul>

            {items.map(i => 
                <ShoppingListItem item={i.item} quantity={i.quantity} completed={i.completed} key={i.id}/>
            )}
        </ul>
    </div>
}
