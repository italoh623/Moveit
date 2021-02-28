import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { Settings } from '../components/Settings';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { LoginProvider } from '../contexts/LoginContext';
import User from '../models/User';


import styles from '../styles/pages/Home.module.css'

interface HomeProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	logged: boolean;
	userLogged: User;
	toggleTheme: () => void;
}

export default function Home({
	level,
	currentExperience,
	challengesCompleted,
	logged,
	userLogged,
	toggleTheme
}: HomeProps) {
	const { colors, title } = useContext(ThemeContext);

	return (
		<LoginProvider logged={logged} userLogged={userLogged}>
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

					<Settings 
						toggleTheme={toggleTheme}
						colors={colors}
						title={title}
					/>

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
		</LoginProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengesCompleted, logged, userLogged } = ctx.req.cookies;

	const obj = JSON.parse(userLogged || '{"name":"Ítalo Henrique", "avatar":"https://github.com/italoh623.png", "gitHubUser":"italoh623"}');
	// const user = new  User(obj.gitHubUser, obj.name, obj.avatar);

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
			logged: Boolean(logged),
			userLogged: obj
		}
	}
}
