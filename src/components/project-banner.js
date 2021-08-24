import React from 'react';

const ProjectBanner = ({
	id = '',
	className = '',
	img = null,
	children,
}) => {
	return (
		<div
			id={id}
			className={`relative w-full h-48 tablet:h-96 bg-gray-800 ${className}`}
		>
			{/** Image. */}
			<div className={`absolute w-full h-full border-t border-b border-gray-700`}>
				<img
					className={`relative block h-full w-full object-contain transition-all duration-500 opacity-0`}
					onLoad={(event) => event.target.style.opacity = 1}
					src={img}
				/>

				<div className={`absolute left-1/2 bottom-0 bg-gray-800 border border-b-0 border-gray-700 rounded-tl-3xl rounded-tr-3xl m-auto text-center px-4 tablet:px-6 py-1 tablet:py-2 transform -translate-x-1/2 whitespace-nowrap`}>
					<span className={`text-xs tablet:text-sm text-gray-400 font-normal italic`}>You are reading about</span><br/>
					<span className={`text-sm tablet:text-xl font-bold text-primary`}>{children || 'NO TITLE GIVEN'}</span>
				</div>
			</div>

			{/** Fade Left. */}
			<div className={`absolute w-12 h-full bg-gradient-to-r from-gray-900`} />
			
			{/** Fade Right. */}
			<div className={`absolute w-12 h-full right-0 bg-gradient-to-r from-transparent to-gray-900`} />
		</div>
	)
}

export default ProjectBanner;