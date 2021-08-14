import React from 'react';

const TextTitle = ({
	id = '',
	wrapClassName = '',
	textClassName = '',
	children
}) => {
	return (
		<div
			id={id}
			className={`relative w-full p-12 text-2xl text-primary text-center ${wrapClassName}`}
		>
			<div className={`relative mx-auto ${textClassName}`}>
				{children}
			</div>
		</div>
	)
}

export default TextTitle;