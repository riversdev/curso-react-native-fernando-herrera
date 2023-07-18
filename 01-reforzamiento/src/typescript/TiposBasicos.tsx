export const TiposBasicos = () => {
    const nombre: string = 'Rivers'
    const edad: number = 23
    const estaActivo: boolean = true

    const poderes: (string | number)[] = [] // 'Velocidad', 'Volar', 'Respirar agua'

    poderes.push('hihi')
    poderes.push(123)
    // poderes.push(true)

    return (
        <>
            <h3>TiposBasicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <br />

        </>
    )
}