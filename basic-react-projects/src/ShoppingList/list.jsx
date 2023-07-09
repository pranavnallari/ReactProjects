import './list.css'


export default function List({ items }) {

    return <div className="List">
        <h1>Shopping Cart List</h1>
        <ul>

            {items.map(i => 
            <h3>
                <li style={{"color":!i.completed?"white":"black","textDecoration":i.completed?"line-through":"none"}}>{i.item} - {i.quantity}</li>
            </h3>
            )}
        </ul>
    </div>
}
