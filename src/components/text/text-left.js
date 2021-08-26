import React from 'react';

const TextLeft = ({
	id = '',
	className = '',
	children,
}) => {
	return (
		<div
			id={id}
			className={`text-left ${className}`}
		>
			{children}
		</div>
	)
}

export default TextLeft;