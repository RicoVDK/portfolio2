import React from 'react';

import {
	buttonScaleHover
} from '/src/components/effect-styles';

export const Entry = ({
	id = '',
	className = '',
	effects = true,
	children
}) => {
	return (
		<div
			id={id}
			className={`relative w-64 h-64 border border-gray-700 bg-gray-800 rounded-3xl cursor-pointer overflow-hidden group ${className} ${effects ? buttonScaleHover : ''}`}
		>
			{children}
		</div>
	)
}

const IMGGrid = ({
	id = '',
	className = '',
	children
}) => {
	return (
		<div
			id={id}
			className={`relative grid grid-cols-1 tablet:grid-cols-2 gap-4 m-auto w-max ${className}`}
		>
			{children}
		</div>
	)
}

export default IMGGrid;