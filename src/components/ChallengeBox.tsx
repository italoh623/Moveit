import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge } = useContext(ChallengesContext);

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Body"/>
                        <strong>Exercite-se</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo <br/> para receber desafios a <br/> serem completados</strong>
                    <div>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        <p> Avance de level completando desafios. </p>
                    </div>  
                </div>
            ) }
        </div>
    )
}