import { createTheme } from '@mui/material'

const theme = createTheme({
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 20
				}
			}
		},
		MuiTextField: {
			defaultProps: {
				size: 'small'
			},
			styleOverrides: {
				root: {
					borderRadius: 8
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					fontSize: 13,
					paddingTop: 5,
					paddingBottom: 5,
					backgroundColor: '#fff'
				},
				inputAdornedStart: {
					marginLeft: 10
				}
			}
		},
		MuiSvgIcon: {
			defaultProps: {
				fontSize: 'small'
			}
		},
		MuiButton: {
			defaultProps: {
				// size: 'small',
				variant: 'contained'
			},
			styleOverrides: {
				root: {
					paddingTop: 8,
					paddingBottom: 8,
					borderRadius: 8
				}
			}
		}
	},
	typography: {
		allVariants: {
			fontFamily: ['Open Sans', 'sans-serif'].join(',')
		},
		h4: {
			fontFamily: ['Josefin Sans', 'sans-serif'].join(',')
		}
	}
})

export default theme
