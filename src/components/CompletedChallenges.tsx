import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted }  = useContext(ChallengesContext);

    const challengesCompletedFormatted = challengesCompleted < 10 ? 
        `0${challengesCompleted}` :
        challengesCompleted

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompletedFormatted}</span>
        </div>
    );
}