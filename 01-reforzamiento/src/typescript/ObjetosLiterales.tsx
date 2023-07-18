// type, class, interface

interface Persona {
    nombre: string
    edad: number
    direccion: Direccion
}

interface Direccion {
    pais: string
    casaNo: number
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Rivers',
        edad: 23,
        direccion: {
            pais: 'Mexico',
            casaNo: 610
        }
    }

    return (
        <>
            <h3>ObjetosLiterales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 4)}
                </pre>
            </code>
        </>
    )
}
