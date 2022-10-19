import { useState } from 'react'

export default function useAuthModel() {
    const [user, setUser] = useState<any>({ name: 'harrison' });

    return {
        user,
        setUser
    }
}