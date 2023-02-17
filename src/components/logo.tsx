import React from 'react'
import { ReactSVG } from 'react-svg'

type Props = {}

const Logo = (props: Props) => {
	return (
		<ReactSVG
			src='/logo.svg'
			beforeInjection={(svg) => {
				svg.setAttribute('style', 'width: 193px')
			}}
		/>
	)
}

export default Logo
