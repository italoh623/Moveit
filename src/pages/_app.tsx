import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components';
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
			<Component {...pageProps} toggleTheme={toggleTheme} />
		</ThemeProvider>
	)
}

export default MyApp
