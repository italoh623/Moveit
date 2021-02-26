import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { usePersistedState } from '../utils/usePersistedState';

import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
				<ChallengesProvider>
					<Component {...pageProps} toggleTheme={toggleTheme} />
				</ChallengesProvider>
		</ThemeProvider>
	)
}

export default MyApp
