import React from 'react';

const TextItalic = ({
	className = '',
	children
}) => (
	<span className={`inline italic ${className}`}>{children}</span>
)

export default TextItalic;