import React from 'react'
import { Stack, Typography } from '@mui/material'

type Props = {}

const LoginFormHeader = (props: Props) => {
	return (
		<Stack
			textAlign='center'
			color='#fff'
			mb={5}
		>
			<Typography
				variant='h4'
				textTransform='uppercase'
			>
				Sign In
			</Typography>
			<Typography
				fontWeight={300}
				variant='body2'
			>
				
			</Typography>
		</Stack>
	)
}

export default LoginFormHeader
