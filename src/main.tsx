import React from 'react'
import ReactDOM from 'react-dom/client'
import { Stack, ThemeProvider } from '@mui/material'
import './index.css'
import theme from './utils/theme'
import LoginPage from './pages/login'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Stack minHeight='100vh'>
				<LoginPage />
			</Stack>
		</ThemeProvider>
	</React.StrictMode>
)
