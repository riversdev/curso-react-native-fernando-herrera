import { User } from '../interfaces/reqRes'
import { useUsers } from '../hooks/useUsers'

export const Users = () => {
    const { users, page, totalPages, changePage } = useUsers()

    const renderItem = ({ id, avatar, first_name, last_name, email }: User) => (
        <tr key={id}>
            <td><img src={avatar} style={{ height: '35px', borderRadius: 100 }} /></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(renderItem)}
                </tbody>
            </table>
            <div className="d-flex justify-content-between">
                <button className='btn btn-primary' onClick={() => changePage(-1)} disabled={page === 1}>Anterior</button>
                <h5>Page: {page} / {totalPages}</h5>
                <button className='btn btn-primary' onClick={() => changePage()} disabled={page === totalPages}>Siguiente</button>
            </div>
        </>
    )
}