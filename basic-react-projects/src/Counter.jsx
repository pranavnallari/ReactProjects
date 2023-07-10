import { useState } from "react";
export default function Counter()
{
    const [count,setCount] = useState(5);
    const incCount = () => {setCount(count+1)}
    return (
        <div>
            <h3>The count is :{count} </h3>
            <button onClick={incCount}>Increment</button>
        </div>
    );
}