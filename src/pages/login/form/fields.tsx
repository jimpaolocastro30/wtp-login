import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import KeyIcon from '@mui/icons-material/Key'
import { Button, Stack, TextFieldProps } from '@mui/material'
import FormikTextField from '../../../components/text_field'
import { FormProps } from '..'

type Props = {}

type FieldProps<T> = {
	name: keyof T
} & TextFieldProps

const fields: Array<FieldProps<FormProps>> = [
	{
		name: 'username',
		placeholder: 'Username',
		InputProps: {
			startAdornment: <PersonIcon />
		}
	},
	{
		name: 'password',
		type: 'password',
		placeholder: 'Password',
		InputProps: {
			startAdornment: <KeyIcon />
		}
	}
]

const LoginFormFields = (props: Props) => {
	return (
		<Stack
			alignItems='center'
			spacing={1.5}
			maxWidth={240}
		>
			{fields.map((field) => (
				<FormikTextField
					key={field.name}
					{...field}
				/>
			))}
			<Stack width='100%'>
				<Button type='submit'>Submit</Button>
			</Stack>
		</Stack>
	)
}

export default LoginFormFields
