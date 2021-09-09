import React, {
	useRef,
} from 'react';
import {
	Link
} from 'gatsby';

import {
	buttonScaleHover
} from '/src/components/effect-styles.js';
import {
	squareClickEffect
} from '/src/components/click-effects';

const ProjectEntry = ({
	title = 'No Title',
	desc = 'No Desc',
	updated = '--/--/----',
	img = null,
	url = '#',
	id = '',
	disabled = false,
}) => {
	const entryRef = useRef(null);

	const entryClicked = () => {
		if (disabled)
			return;

		squareClickEffect(entryRef.current);
	}
	
	return (
		<div
			ref={entryRef}
			onClick={entryClicked}
			className={`${disabled ? 'pointer-events-none pointer-events-none opacity-50' : ''}`}
		>
			<Link
				to={url}
			>
				<div
					id={id}
					className={`relative flex flex-col w-full h-full max-w-400px bg-gray-800 border border-gray-700 rounded-3xl items-center m-auto group overflow-hidden ${buttonScaleHover}`}
				>
					{/** Image. */}
					<div className={`relative w-full h-56 overflow-hidden bg-black border-b border-gray-700 text-primary-3`}>
						<img
							src={img}
							className={`relative w-full h-full object-contain transition-all duration-500 opacity-0`}
							onLoad={(event) => event.target.style.opacity = 1}
						/>

						<div className={`absolute py-2 px-4 top-0 right-0 bg-gray-800 border-b border-l border-gray-700 text-gray-300 font-bold rounded-bl-3xl`}>
							{updated} <i className={`fas fa-pencil-alt pl-2`} />
						</div>

						<div className={`absolute py-2 px-4 bottom-0 bg-gray-800 border-t border-r border-gray-700 font-bold rounded-tr-3xl`}>
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
						<div className={`relative w-full px-4 py-12 text-center italic text-xl bg-black bg-opacity-25`}>
							This entry is currently unavailable
						</div>
					</div>}

					{/** Glow. */}
					{!disabled && <div className={`absolute w-full h-full bg-white opacity-0 group-hover:opacity-10`} />}
				</div>
			</Link>
		</div>
	)
}

export default ProjectEntry;