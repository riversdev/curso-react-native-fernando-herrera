import { useRef, useState } from 'react'

enum Operations { add, substract, multiply, divide }

export const useCalculator = () => {
    const [prevNumber, setPrevNumber] = useState('0')
    const [number, setNumber] = useState('0')
    const lastOperation = useRef<Operations>()

    const clear = () => {
        setNumber('0')
        setPrevNumber('0')
    }
    const convertPositiveNegative = () => {
        if (number === '0') return

        setNumber(number.includes('-') ? number.replace('-', '') : `-${number}`)
    }
    const buildNumber = (txt: string) => {
        if (txt === '0' && number === '0') return
        if (txt === '.' && number.includes('.')) return

        setNumber(number === '0' && txt !== '.' ? txt : `${number}${txt}`)
    }
    const removeLastChar = () => {
        const errorValues = ['', '-', '-0', '0.', '-0.']
        const newNumber = number.slice(0, -1)

        if (errorValues.includes(newNumber)) return setNumber('0')
        if (newNumber.endsWith('.')) return setNumber(newNumber.slice(0, -1))

        setNumber(newNumber)
    }
    const saveCurrentNumber = () => {
        if (number === '0') return

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number)
        }

        setNumber('0')
    }

    const add = () => {
        saveCurrentNumber()
        lastOperation.current = Operations.add
    }
    const substract = () => {
        saveCurrentNumber()
        lastOperation.current = Operations.substract
    }
    const multiply = () => {
        saveCurrentNumber()
        lastOperation.current = Operations.multiply
    }
    const divide = () => {
        saveCurrentNumber()
        lastOperation.current = Operations.divide
    }

    const calculate = () => {
        if (number === '0') return

        const A = Number(prevNumber)
        const B = Number(number)

        switch (lastOperation.current) {
            case Operations.add:
                setNumber(`${A + B}`)
                break

            case Operations.substract:
                setNumber(`${A - B}`)
                break

            case Operations.multiply:
                setNumber(`${A * B}`)
                break

            case Operations.divide:
                setNumber(`${A / B}`)
                break
        }

        setPrevNumber('0')
    }

    return {
        prevNumber,
        number,

        clear,
        convertPositiveNegative,
        buildNumber,
        removeLastChar,

        add,
        substract,
        multiply,
        divide,

        calculate,
    }
}