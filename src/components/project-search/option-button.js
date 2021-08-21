import React from 'react';

import { buttonScaleHover } from '/src/components/effect-styles';

const OptionButton = ({
	text = 'No Text',
	onClick = () => {},
}) => {
	return (
		<div className={`flex relative w-full items-center px-1 pb-1 pt-1 first:pt-0`}>
			<div className={`relative w-full h-full`}>
				<div 
					onClick={onClick}
					className={`flex relative flex-row w-full h-6 rounded-full text-primary bg-gray-800 hover:bg-gray-700 border border-gray-700 cursor-pointer ${buttonScaleHover}`}
				>
					{/** Text. */}
					<div className={`relative h-full flex-grow truncate`}>
						<div className={`flex absolute w-full h-full px-2 text-sm truncate items-center justify-center`}>
							{text}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OptionButton;