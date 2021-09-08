import React from 'react';

const ULOut = ({
	id = '',
	className = '',
	children,
}) => {
	return (
		<ul
			id={id}
			className={`list-disc list-outside ${className}`}
		>
			{children}
		</ul>
	)
}

export default ULOut;