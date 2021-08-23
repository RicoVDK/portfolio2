import React from 'react';

const TextMark = ({
	id = '',
	className = '',
	children,
}) => (
	<span
		id={id}
		className={`inline underline italic ${className}`}
	>
		{children}
	</span>
)

export default TextMark;