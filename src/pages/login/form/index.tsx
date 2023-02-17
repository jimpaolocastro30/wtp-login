import React from 'react'
import * as Yup from 'yup'
import { alpha, Paper } from '@mui/material'
import { Formik, Form, FormikHelpers } from 'formik'
import LoginFormHeader from './header'
import { FormProps } from '..'
import LoginFormFields from './fields'
import { username } from '../../../utils/field_validators'

type Props = {
	onSubmit: (values: FormProps, helpers: FormikHelpers<FormProps>) => void
}

const LoginForm = ({ onSubmit }: Props) => {
	return (
		<Formik
			initialValues={{
				username: '',
				password: ''
			}}
			onSubmit={onSubmit}
			validationSchema={Yup.object().shape({ username })}
		>
			<Paper
				sx={{
					maxWidth: 512,
					width: '100%',
					position: 'relative',
					backdropFilter: 'blur(14px)',
					boxShadow: '0 15px 25px rgba(129, 124, 124, 0.2)',
					bgcolor: alpha('#fff', 0.2),
					py: 6,
					px: 3,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
				component={Form}
			>
				<LoginFormHeader />
				<LoginFormFields />
			</Paper>
		</Formik>
	)
}

export default LoginForm
