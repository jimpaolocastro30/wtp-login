import React from 'react'
import { FormikHelpers } from 'formik'
import { Stack } from '@mui/material'
import LoginForm from './form'
import LoginHeader from './header'

type Props = {}

export type FormProps = Pick<Account, 'username' | 'password'>

const LoginPage = (props: Props) => {
	const handleSubmit = (values: FormProps, helpers: FormikHelpers<FormProps>) => {
		const registeredUsername = import.meta.env.VITE_SAMPLE_USERNAME
		const registeredPassword = import.meta.env.VITE_SAMPLE_PASSWORD
		if (registeredUsername === values.username && registeredPassword === values.password) window.location.href = import.meta.env.VITE_HOME_PAGE
		else helpers.setFieldError('password', 'Invalid credentials')
	}

	return (
		<Stack
			flex={1}
			alignItems='center'
			justifyContent='center'
			p={4}
			sx={{
				background: `url(${import.meta.env.VITE_BACKGROUND_IMAGE_URL}) no-repeat`
			}}
		>
			<LoginHeader />
			<LoginForm onSubmit={handleSubmit} />
		</Stack>
	)
}

export default LoginPage
