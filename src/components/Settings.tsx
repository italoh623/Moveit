import Switch from 'react-switch';

import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { LoginContext } from '../contexts/LoginContext';

import styles from '../styles/components/Settings.module.css';

export function Settings(props) {
    const { level } = useContext(ChallengesContext);
    const { logged, userLogged, LogOut } = useContext(LoginContext);
    
    return (
        <div className={styles.container}>
                <Switch
                    onChange={props.toggleTheme}
                    checked={props.title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={36}
                    handleDiameter={20}
                    offHandleColor={props.colors.text}
                    onHandleColor={props.colors.textHighlight}
                    offColor={props.colors.grayLine}
                    onColor={props.colors.text}
                />

                <button type="button" onClick={LogOut}>
                    <img src="icons/log-out.svg" alt="Logout"/>
                </button>
        </div>
    );
}