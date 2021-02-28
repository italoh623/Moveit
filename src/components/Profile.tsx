import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { LoginContext } from '../contexts/LoginContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const { logged, userLogged } = useContext(LoginContext);

    
    return (
        <>
            {logged ? (
                <div className={styles.profileContainer}>
                    <img src={`${userLogged.avatar}`} alt={userLogged.name}/>
                    <div>
                        <strong>{userLogged.name}</strong>
                        <p>
                            <img src="icons/level.svg" alt="Level"/>
                            Level {level}
                        </p>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
        
    );
}