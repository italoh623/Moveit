import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { LoginContext } from '../contexts/LoginContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const { logged, userLogged } = useContext(LoginContext);
    // console.log(userLogged)

    
    return (
        <div className={styles.profileContainer}>
            <img src={`${userLogged.avatar}`} alt="Ítalo Henrique"/>
            <div>
                <strong>{userLogged.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}