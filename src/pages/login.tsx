import Head from 'next/head'
import User from '../models/User';
import { LoginContent } from '../components/LoginContent';
import { LoginProvider } from '../contexts/LoginContext';
import styles from '../styles/pages/login.module.css';
import { GetServerSideProps } from 'next';

interface LoginProps {
	logged: boolean;
	userLogged: User;
}

export default function Login({ logged, userLogged }: LoginProps) {
	return (
        <LoginProvider logged={logged} userLogged={userLogged}>
            <div className={styles.background}>
                <Head>
                    <title>Login | Move.it</title>
                </Head>

                <div className={styles.container}>
                    <img src="icons/logo.svg" alt="Logo"/>

                    <LoginContent />
                </div>
            </div>
        </LoginProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { logged, userLogged } = ctx.req.cookies;
    
    const obj = JSON.parse(userLogged || '{"name":"Ítalo Henrique", "avatar":"https://github.com/italoh623.png", "gitHubUser":"italoh623"}');
	// const user = new  User(obj.gitHubUser, obj.name, obj.avatar);

	return {
		props: {
			logged: Boolean(logged),
			userLogged: obj
		}
	}
}