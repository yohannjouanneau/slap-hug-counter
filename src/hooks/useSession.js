import { useContext } from 'react';
import { userContext } from '../context'

export const useSession = () => {
    const { user } = useContext(userContext)
    return { user }
}
