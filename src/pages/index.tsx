import Head from 'next/head'

import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css'

export default function Home({ toggleTheme }) {
	const { colors, title } = useContext(ThemeContext);

	return (
		<div className={styles.container}>
			<Head>
				<title>Início | Move.it</title>
			</Head>

			<ExperienceBar />

			<div className={styles.switch}>
				<Switch
					onChange={toggleTheme}
					checked={title === 'dark'}
					checkedIcon={false}
					uncheckedIcon={false}
					height={10}
					width={36}
					handleDiameter={20}
					offHandleColor={colors.text}
					onHandleColor={colors.textHighlight}
					offColor={colors.grayLine}
					onColor={colors.text}
				/>
      		</div>

			<CountdownProvider>
				<section>
					<div>
						<Profile />
						<CompletedChallenges />
						<Countdown />
					</div>
					<div>
						<ChallengeBox />
					</div>
				</section>
			</CountdownProvider>

			
		</div>
	)
}
