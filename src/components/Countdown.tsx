import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { 
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{ minutesLeft }</span>
                    <span>{ minutesRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondsLeft }</span>
                    <span>{ secondsRight }</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                    <img src="icons/check.svg" alt="Encerrado"/>
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                            <img src="icons/close.svg" alt="Abandonar" style={{'height': '1rem', 'width': '1rem'}}/>
                        </button>
                    ) : (
                        <button 
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Inciar um ciclo
                            <img src="icons/play.svg" alt="Iniciar"/>
                        </button>
                    ) }
                </>
            ) }
        </div>
    );
}