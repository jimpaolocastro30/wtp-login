import React, { useMemo } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'

type Props = {
	name: string
} & TextFieldProps

const FormikTextField = (props: Props) => {
	const [field, meta] = useField<string>(props.name)

	const hasError = useMemo(() => meta.touched && Boolean(meta.error), [meta])

	return (
		<TextField
			{...props}
			{...field}
			error={hasError}
			helperText={hasError ? meta.error : undefined}
			FormHelperTextProps={{
				sx: {
					position: 'absolute',
					top: -5,
					right: -10
				}
			}}
		/>
	)
}

export default FormikTextField
