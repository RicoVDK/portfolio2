import React from 'react';

const JTypeHours = ({
	hours = '(32-40h p/w)',
	children
}) => (
	<div className={`relative flex flex-col h-full w-full truncate items-end`}>
		<span>{children}</span>
		<span className={`text-xs text-gray-400`}>{hours}</span>
	</div>
)

export default JTypeHours;