import { useCounter } from '../hooks/useCounter'

export const ContadorConHook = () => {
    const { counter, increment, decrement, reset } = useCounter()

    return (
        <>
            <h3>Contador con hook <span>{counter}</span></h3>
            <button className="btn btn-primary" onClick={() => decrement(1)}>-1</button>
            <button className="btn btn-primary ms-2" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-primary ms-2" onClick={() => reset()}>Reset</button>
        </>
    )
}