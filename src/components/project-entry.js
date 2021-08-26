import React from 'react';
import {
	Link
} from 'gatsby';

import {
	buttonScaleHover
} from '/src/components/effect-styles.js';

const ProjectEntry = ({
	title = 'No Title',
	desc = 'No Desc',
	img = null,
	url = '#',
	id = '',
	disabled = false,
}) => {
	return (
		<Link
			to={url}
			className={`${disabled ? 'pointer-events-none pointer-events-none opacity-50' : ''}`}
		>
			<div
				id={id}
				className={`relative flex flex-col w-full h-full bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-3xl items-center m-auto overflow-hidden group ${buttonScaleHover}`}
			>
				{/** Image. */}
				<div className={`relative w-full h-56 overflow-hidden bg-black border-b border-gray-700 text-primary-3`}>
					<div className={`absolute py-2 px-4 bottom-0 bg-gray-800 group-hover:bg-gray-700 border-t border-r border-gray-700 font-bold rounded-tr-3xl`}>
						{title}
					</div>
				</div>

				{/** Text. */}
				<div
					className={`relative flex w-full flex-grow p-6 text-center items-center italic text-sm`}
					dangerouslySetInnerHTML={{ __html: desc }}
				/>

				{/** Disabled. */}
				{disabled && <div className={`absolute w-full`}>
					<div className={`relative w-full px-4 py-6 text-center italic text-xl bg-black bg-opacity-25`}>
						This entry is currently unavailable
					</div>
				</div>}
			</div>
		</Link>
	)
}

export default ProjectEntry;