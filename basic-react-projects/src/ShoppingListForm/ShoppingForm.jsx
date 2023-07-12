import { useState } from "react";
export default function ShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 })
    const updateForm = function (evt) {
        setFormData(currData => {
            currData[evt.target.name] = evt.target.value
            return { ...currData }
        })
    }
    const formSubmit = function (e) {
        e.preventDefault()
        addItem(formData)
        setFormData({ product: "", quantity: 0 })
    }
    return <form>
        <label htmlFor="product">Product Name :-</label>
        <input type="text" name="product" id="product" placeholder="product" value={formData.product} onChange={updateForm} />
        <label htmlFor="quantity">Enter Quantity :-</label>
        <input type="number" name="quantity" id="quantity" placeholder="quantity" value={formData.quantity} min={0} onChange={updateForm} max={8273} />
        <button onClick={formSubmit}>Submit</button>
    </form>
}