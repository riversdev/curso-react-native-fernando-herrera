import { useState } from 'react'

export const useForm = <T extends Object>(initialForm: T) => {
    const [formData, setFormData] = useState(initialForm)

    const handleInputChange = (name: keyof T, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return {
        ...formData,
        formData,
        handleInputChange
    }
}