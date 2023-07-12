import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({username:"",password:""})
    const updateFormData = function (evt) {
        const prevData  = evt.target.name
        const newData   = evt.target.value
        setFormData(currData =>{
            currData[prevData] = newData
            return {...currData}
        })
    }
    const submitForm = function()
    {
     alert(formData.username)
    }
    return <div>
        <label htmlFor="username">Enter Username</label>
        <input type="text" placeholder="Username" id="username" name="username" value={formData.username}  onChange={updateFormData} />
        <br/>
        <label htmlFor="password">Enter Password</label>
        <input type="password" placeholder="Password" id="password" name="password" value={formData.password} onChange={updateFormData} />
        <button onClick={submitForm}>Submit</button>
    </div>
}