import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { LoginContext } from '../contexts/LoginContext';

import styles from '../styles/components/LoginContent.module.css';

export function LoginContent() {
    const { logged, LogIn }  = useContext(LoginContext);

    const [gitHubUser, setGitHubUser] = useState('');
    const [ready, setReady] = useState(false);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setGitHubUser(event.target.value);
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
                        onClick={() => LogIn(gitHubUser)}
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