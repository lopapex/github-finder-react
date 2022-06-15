import { FC, useCallback, useMemo } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

import { useTheme } from '../hooks/useTheme';

const ThemeSwitch: FC = () => {
	const [mode, setMode] = useTheme();
	const isDark = useMemo(() => mode === 'dark', [mode]);
	const changeMode = useCallback((dark: boolean) => {
		setMode(dark ? 'light' : 'dark');
	}, []);
	return (
		<Tooltip title={isDark ? 'Light theme' : 'Dark theme'}>
			<IconButton
				size='small'
				onClick={() => changeMode(isDark)}
				sx={{ p: '0' }}
			>
				{isDark ? (
					<LightMode fontSize='inherit' />
				) : (
					<DarkMode fontSize='inherit' />
				)}
			</IconButton>
		</Tooltip>
	);
};

export default ThemeSwitch;
