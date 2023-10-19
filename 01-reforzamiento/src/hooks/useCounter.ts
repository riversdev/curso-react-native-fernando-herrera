import { useState } from 'react'

export const useCounter = (initial: number = 10) => {
    const [counter, setCounter] = useState(initial)

    const increment = (num: number) => setCounter(counter + num)
    const decrement = (num: number) => setCounter(counter - num)
    const reset = () => setCounter(initial)

    return {
        counter,
        increment,
        decrement,
        reset
    }
}