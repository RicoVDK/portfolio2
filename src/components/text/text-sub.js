import React from 'react';

const TextSub = ({
	id = '',
	wrapClassName = '',
	textClassName = '',
	children
}) => {
	return (
		<div
			id={id}
			className={`relative w-full text-base italic ${wrapClassName}`}
		>
			<div className={`relative ${textClassName}`}>
				{children}
			</div>
		</div>
	)
}

export default TextSub;