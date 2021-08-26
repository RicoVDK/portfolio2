import React from 'react';

const TextCenter = ({
	id = '',
	className = '',
	children,
}) => {
	return (
		<div
			id={id}
			className={`text-center ${className}`}
		>
			{children}
		</div>
	)
}

export default TextCenter;