import React from 'react';

export const MobilePageLayout = ({ children }) => {
	return (
		<div
			id={`page`}
			className={`relative flex-grow w-full w-full border-l border-r desktop:border-0 border-primary`}
		>
			<div className={`absolute w-full h-full overflow-y-scroll pt-6`}>
				{children}
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
				<div className={`absolute w-full h-full overflow-y-scroll pt-6 px-6`}>
					{children}
				</div>
			</div>
		</div>
	)
}