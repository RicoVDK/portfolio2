import React from 'react';

const TextTable = ({
	id = '',
	className = '',
	contents = [],
}) => {
	const getBorder = (index) => (
		index === 0 ? '' : 'border-t'
	)
	
	return (
		<div
			id={id}
			className={`relative grid grid-cols-2 grid-flow-row-dense w-full max-w-400px rounded-3xl border border-gray-700 overflow-hidden ${className}`}
		>
			{contents.map((entry, index) => (
				<>
					{/** Display. */}
					<div className={`relative py-2 px-4 text-right font-bold bg-gray-800 border-r border-gray-700 ${getBorder(index)}`}>
						{entry.displayName}
					</div>

					{/** Child. */}
					<div className={`relative flex justify-center items-center text-lg border-gray-700 ${getBorder(index)}`}>
						{entry.child}
					</div>
				</>
			))}
		</div>
	)
}

export default TextTable;