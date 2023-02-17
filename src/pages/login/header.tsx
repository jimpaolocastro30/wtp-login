import React from 'react'
import { Stack } from '@mui/material'
import Logo from '../../components/logo'

type Props = {}

const LoginHeader = (props: Props) => {
	return (
		<Stack
			alignItems='center'
			mb={4}
		>
			<Logo />
		</Stack>
	)
}

export default LoginHeader
