import { useState } from 'react'

export const useForm = <T extends Object>(initialState: T) => {
    const [formdata, setFormdata] = useState(initialState)

    const handleChange = (value: any, field: keyof T) => setFormdata({ ...formdata, [field]: value })

    const resetForm = () => setFormdata(initialState)

    return {
        ...formdata,
        formdata,

        handleChange,
        resetForm,
    }
}