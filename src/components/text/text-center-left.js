import React from 'react';

const TextCenterLeft = ({
	id = '',
	className = '',
	children,
}) => {
	return (
		<div
			id={id}
			className={`relative flex w-full justify-center text-left ${className}`}
		>
			<div>
				{children}
			</div>
		</div>
	)
}

export default TextCenterLeft;