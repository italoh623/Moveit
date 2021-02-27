import Head from 'next/head'

import styles from '../styles/pages/login.module.css';
import { LoginContent } from '../components/LoginContent';

export default function Login() {
	return (
        <div className={styles.background}>
            <Head>
                <title>Login | Move.it</title>
            </Head>

            <div className={styles.container}>
                <img src="icons/logo.svg" alt="Logo"/>

                <LoginContent />
            </div>
        </div>
	)
}
