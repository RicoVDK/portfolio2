import React from 'react';

const TagItem = ({
	tag = 0,
	text = 'No Text',
	onClicked = () => {},
	includeTags = [],
	excludeTags = [],
}) => {
	const getTextColour = () => {
		if (includeTags.includes(tag))
			return 'text-gray-800 font-bold';
		else if (excludeTags.includes(tag))
			return 'text-gray-800 font-bold';
			
		return 'text-gray-300';
	}

	const getBackgroundColour = () => {
		if (includeTags.includes(tag))
			return 'bg-green-500 hover:bg-green-400';
		else if (excludeTags.includes(tag))
			return 'bg-red-600 hover:bg-red-500';
			
		return 'bg-gray-800 hover:bg-gray-700 border-gray-700';
	}

	const getIcon = () => {
		if (includeTags.includes(tag))
			return 'check';
		else if (excludeTags.includes(tag))
			return 'minus';
			
		return 'plus';
	}

	const tagClicked = () => onClicked(tag);

	return (
		<div
			onClick={tagClicked}
			className={`flex relative w-full items-center px-1 py-1`}
		>
			<div className={`relative w-full h-full`}>
				<div className={`flex relative flex-row w-full h-6 rounded-full cursor-pointer border border-transparent ${getBackgroundColour()}`}>
					{/** Text. */}
					<div className={`relative h-full flex-grow truncate`}>
						<div className={`flex absolute w-full h-full px-2 text-sm truncate items-center ${getTextColour()}`}>
							{text}
						</div>
					</div>

					{/** Icon. */}
					<div className={`flex relative w-6 h-full justify-center items-center`}>
						<div className={`flex relative w-4 h-4 rounded-full text-sm justify-center items-center`}>
							<i className={`fas fa-${getIcon()} ${getTextColour()}`}></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TagItem;