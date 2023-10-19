import { useEffect, useState } from 'react'
import { ReqResInterface, User } from '../interfaces/reqRes'
import { reqResApi } from '../api/reqResApi'

export const useUsers = () => {
    const [users, setusers] = useState<User[]>([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        loadUsers()
    }, [page])

    const loadUsers = async () => {
        try {
            const { data: { data, total_pages } } = await reqResApi.get<ReqResInterface>(`/users?page=${page}`)

            setTotalPages(total_pages)
            setusers(data)
        } catch (error) {
            console.log(error)
        }
    }

    const changePage = (add: number = 1) => {
        if (page + add < 1 || page + add > totalPages) return

        setPage(page + add)
    }

    return {
        users,
        page,
        totalPages,
        changePage,
    }
}