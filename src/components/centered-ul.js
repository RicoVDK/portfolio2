import React from 'react';

const CenteredUL = ({
	className = '',
	children,
}) => (
	<ul className={`relative block w-full tablet:w-2/3 text-left list-inside list-disc text-base m-auto ${className}`}>
		{children}
	</ul>
)

export default CenteredUL;