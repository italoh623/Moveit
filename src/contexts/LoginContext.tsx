import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

import axios from 'axios';
import { setupMaster } from 'cluster';
import User from '../models/User';

interface LoginContextData {
    logged: boolean;
    userLogged: User;
    LogIn: (user: string) => void;
    LogOut: () => void;
}

interface LoginProviderProps {
    children: ReactNode;
    logged: boolean;
    userLogged: User;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({
    children,
    ...rest
}: LoginProviderProps) {
    const [logged, setLogged] = useState(rest.logged);
    const [userLogged, SetUserLogged] = useState(rest.userLogged)

    const router = useRouter()

    function LogIn(gitHubUser: string) {
        axios.post(`http://localhost:3000/api/users`, {gitHubUser})
            .then((res) => {
                SetUserLogged(res.data.user);
                setLogged(true);
                router.push('/');
            })
            .catch((error) => {
                alert(error);
            });
    }

    function LogOut() {
        setLogged(false);
        router.push('/login');
    }

    useEffect(() => {
        Cookies.set('userLogged', JSON.stringify(userLogged));
        Cookies.set('logged', JSON.stringify(logged));
    }, [userLogged, logged])

    return (
        <LoginContext.Provider 
            value={{
                logged,
                userLogged,
                LogIn,
                LogOut
            }}
        >
            { children }
        </LoginContext.Provider>
    )
}