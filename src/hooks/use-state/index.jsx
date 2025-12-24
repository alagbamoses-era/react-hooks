import { useState } from 'react'

export const StateExample = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount((prev) => prev + 1)
    }
    const decreaseCount = () => {
        setCount((prev) => prev - 1)
    }
    return (
        <div>
        {" "}
        <p> Count: {count}</p>
        <button onClick={increaseCount}>Increase Counter</button>
        <button onClick={decreaseCount}>Decrease Counter</button>
        </div>
    )
}