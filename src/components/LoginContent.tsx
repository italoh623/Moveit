import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import styles from '../styles/components/LoginContent.module.css';

export function LoginContent() {
    const [gitHubUser, setGitHubUser] = useState('');
    const [ready, setReady] = useState(false);

    const router = useRouter()

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setGitHubUser(event.target.value);
    }

    function navigate() {
        router.push('/');
    }

    useEffect(() => {
        if (gitHubUser === null || gitHubUser === '') {
            setReady(false);
        } else {
            setReady(true);
        }
    }, [gitHubUser]);

    return (
        <div className={styles.container}>
            <img src="icons/fullLogo.svg" alt="Short Logo"/>

            <strong>Bem-Vindo</strong>

            <div className={styles.github}>
                <img src="icons/github.svg" alt="Github"/>
                <p>Faça login com seu Github <br />para começar</p>
            </div>

            <div className={styles.input}>
                <input 
                    type="text"
                    placeholder="Digite seu username"
                    value={gitHubUser}
                    onChange={handleChange}
                />
                {ready ? (
                    <button 
                        type="button"
                        className={styles.ready}
                        onClick={navigate}
                    >
                        <img src="icons/arrow.svg" alt="Entrar"/>
                    </button>
                ) : (
                    <button disabled className={styles.notReady}>
                        <img src="icons/arrow.svg" alt="Entrar"/>
                    </button>
                )}
            </div>
        </div>
    )
}