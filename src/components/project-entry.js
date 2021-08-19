import React from 'react';
import {
	navigate
} from 'gatsby';

const ProjectEntry = ({
	title = 'No Title',
	desc = 'No Desc',
	img = '',
	url = '',
}) => {
	const onReadClicked = () => {
		if (url.length);
			navigate(url);
	}

	return (
		<div className={`relative py-6 border-b-1 border-primar3 w-full last:border-b-0`}>
			{/** Title. */}
			<div className={`relative text-center px-6 pb-4 font-bold`}>
				{title}
			</div>

			{/** Image and Text. */}
			<div className={`relative flex flex-row w-full h-28`}>
				{/** Image. */}
				<div className={`relative h-full w-28 bg-black rounded-2xl border-1 border-gray-400`}>
					<div
						onClick={onReadClicked}
						className={`absolute flex justify-center items-center cursor-pointer bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full w-10 h-10 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2`}
					>
						<i className={`fas fa-book-open`}></i>
					</div>
				</div>

				{/** Text. */}
				<div className={`relative flex flex-grow h-full items-center`}>
					<span className={`absolute pl-4 w-full text-xs text-center italic`}>
						{desc}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProjectEntry;