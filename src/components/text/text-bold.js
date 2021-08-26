import React from 'react';

const TextBold = ({
	id = '',
	className = '',
	children,
}) => {
	return (
		<span
			id={id}
			className={`font-bold ${className}`}
		>
			{children}
		</span>
	)
}

export default TextBold;