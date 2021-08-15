import React from 'react';

const AffinityCard = ({
	faClassName = '',
	title = 'No Title',
	children,
}) => {
	return (
		<div className={`relative flex flex-col h-54 w-full items-center text-center bg-gray-800 p-6 rounded-3xl max-w-400px mx-auto tablet:m-0`}>
			<div className={`relative text-base text-primary-3 font-bold`}>
				<i className={`relative block fas ${faClassName} text-3xl`}></i>
				<div className={`py-2`}>{title}</div>
			</div>

			<div className={`relative flex italic text-sm flex-grow items-center`}>
				<div className={`relative text-center`}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default AffinityCard;