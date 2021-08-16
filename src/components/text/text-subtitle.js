import React from 'react';

const TextSubTitle = ({
	id = '',
	className = '',
	children,
}) => {
	return (
		<span
			id={id}
			className={`relative text-primary-3 font-bold text-base ${className}`}
		>
			{children}
		</span>
	)
}

export default TextSubTitle;