import { useContext } from 'react';
import { useColorScheme as rnUseColorScheme } from 'react-native';
import { ThemeContext } from './theme-provider';

/**
 * Custom useColorScheme hook that respects the app theme preference
 * from `ThemeProvider`. If the user selects 'light' or 'dark' explicitly
 * we return that; otherwise we fall back to the system color scheme.
 */
export function useColorScheme(): 'light' | 'dark' {
	try {
		const themeCtx = useContext(ThemeContext);
		if (themeCtx?.theme && themeCtx.theme !== 'system') {
			return themeCtx.theme === 'dark' ? 'dark' : 'light';
		}
	} catch (e) {
		// Context not available, fall back to system
	}

	const sys = rnUseColorScheme();
	return sys === 'dark' ? 'dark' : 'light';
}
