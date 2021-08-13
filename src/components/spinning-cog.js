import React from 'react';

const SpinningCog = ({
	wrapClassName = '',
	cogClassName= '',
}) => {
	return (
		<div className={`absolute ${wrapClassName}`}>
			<i className={`fas fa-cog ${cogClassName}`}></i>
		</div>
	)
}

export default SpinningCog;