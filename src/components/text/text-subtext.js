import React from 'react';

const TextSubText = ({
	id = '',
	wrapClassName = '',
	textClassName = '',
	children
}) => {
	return (
		<div
			id={id}
			className={`relative w-full text-base tablet:text-lg ${wrapClassName}`}
		>
			<div className={`relative ${textClassName}`}>
				{children}
			</div>
		</div>
	)
}

export default TextSubText;