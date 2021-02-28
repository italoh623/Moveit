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
    
    const user = JSON.parse(userLogged || '{}');
    console.log(logged)
    console.log(logged === 'true')

	return {
		props: {
			logged: logged === 'true',
			userLogged: user
		}
	}
}