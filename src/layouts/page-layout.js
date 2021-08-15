import React from 'react';

export const MobilePageLayout = ({ children }) => {
	return (
		<div
			id={`page`}
			className={`relative flex-grow w-full w-full border-l border-r desktop:border-0 border-primary`}
		>

			{/** Page. */}
			<div className={`relative flex-grow h-full`}>
				<div className={`absolute w-full h-full overflow-y-scroll p-6`}>
					{children}
				</div>
			</div>

			<div
					id={`page-bottom-shadow`}
					className={`absolute w-full h-6 bottom-0 z-50 px-px`}
				>
				<div className={`relative w-full h-full bg-gradient-to-t from-gray-900 to-transparent`}></div>
			</div>
		</div>
	)
}

export const DesktopPageLayout = ({ children }) => {
	return (
		<div
			id={`page`}
			className={`relative flex w-full flex-grow`}
		>
			{/** Sidebar. */}
			<div className={`relative w-1/4 min-w-72 h-full border-r border-primary`}>
				<div className={`absolute w-full h-full`}>

				</div>
			</div>

			{/** Page. */}
			<div className={`relative flex-grow h-full`}>
				<div className={`absolute w-full h-full overflow-y-scroll p-6`}>
					{children}
				</div>
			</div>

			<div
					id={`page-bottom-shadow`}
					className={`absolute w-full h-6 bottom-0 z-50 px-px`}
				>
				<div className={`relative w-full h-full bg-gradient-to-t from-gray-900 to-transparent`}></div>
			</div>
		</div>
	)
}