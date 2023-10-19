import { useState } from 'react'

export const Contador = () => {
    const [counter, setCounter] = useState(0)

    const increment = (num: number) => setCounter(counter + num)
    const decrement = (num: number) => setCounter(counter - num)

    return (
        <>
            <h3>Contador <span>{counter}</span></h3>
            <button className="btn btn-primary" onClick={() => decrement(1)}>-1</button>
            <button className="btn btn-primary ms-2" onClick={() => increment(1)}>+1</button>
        </>
    )
}