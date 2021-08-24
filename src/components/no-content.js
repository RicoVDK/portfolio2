import React from 'react';

const NoContent = ({
	icon = null,
	borderColor = 'border-gray-700',
	bgColor = 'bg-gray-800',
	cogColor = 'text-gray-700',
	children,
}) => {
	return (
		<div className={`relative flex flex-col tablet:flex-row w-full border ${borderColor} ${
			bgColor
		} py-12 px-4 tablet:p-12 justify-center tablet:justify-start items-left tablet:items-center rounded-3xl overflow-hidden`}>
			<i className={`fas fa-cog absolute text-12xl transform -translate-x-1/2 -translate-y-1/2 ${cogColor} left-0 top-0`} />
			<i className={`fas fa-cog absolute text-12xl transform translate-x-1/2 translate-y-1/2 ${cogColor} right-0 bottom-0`} />
			
			<div className={`relative flex justify-center py-6 tablet:py-0`}>
				{icon}
			</div>

			<div className={`relative text-center px-4 flex-grow`}>
				{children}
			</div>
		</div>
	)
}

export default NoContent;