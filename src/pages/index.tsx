import Head from 'next/head'
import { GetServerSideProps } from 'next'

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
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	toggleTheme: () => void;
}

export default function Home({level, currentExperience, challengesCompleted, toggleTheme}: HomeProps) {
	const { colors, title } = useContext(ThemeContext);

	return (
		<ChallengesProvider 
			level={level}
			currentExperience={currentExperience}
			challengesCompleted={challengesCompleted}
		>
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
		</ChallengesProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
	
	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted)
		}
	}
}
