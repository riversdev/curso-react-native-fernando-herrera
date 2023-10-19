import { useForm } from '../hooks/useForm'

export const Formulario = () => {
    const { formData, handleInputChange, email, password } = useForm({ email: 'mail@mail.com', password: '123123' })

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({ target: { value } }) => handleInputChange('email', value)}
            />
            <input
                type="text"
                className="form-control my-2"
                placeholder="Password"
                value={password}
                onChange={({ target: { value } }) => handleInputChange('password', value)}
            />
            <code>
                <pre>
                    {JSON.stringify(formData, null, 4)}
                </pre>
            </code>
        </>
    )
}