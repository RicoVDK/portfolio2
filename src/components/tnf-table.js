import React from 'react';

const getTNFIcon = (entry) => {
	if (entry.tnf === true)
		return 'fas fa-check text-green-400'
	else if (entry.tnf === false)
		return 'fas fa-times text-red-500';
	
	return 'fas fa-question text-primary-3';
}

export const TNFIconClass = (tnf = null) => {
	return getTNFIcon({ tnf: tnf });
}

const Entry = ({
	entry,
	index
}) => {
	const getBorder = (index) => (
		index === 0 ? '' : 'border-t'
	)

	return (
		<>
			{/** Display. */}
			<div className={`relative py-2 px-4 h-14 text-right font-bold bg-gray-800 border-r border-gray-700 ${getBorder(index)}`}>
				{entry.displayName}
			</div>

			{/** TNF. */}
			<div className={`relative flex justify-center items-center text-lg border-gray-700 ${getBorder(index)}`}>
				<i className={getTNFIcon(entry)} />
			</div>
		</>
	)
}

const TNFTable = ({
	id = '',
	className = '',
	contents = [],
}) => {

	return (
		<div
			id={id}
			className={`relative grid grid-cols-2 grid-flow-row-dense w-full max-w-400px rounded-3xl border border-gray-700 overflow-hidden ${className}`}
		>
			{contents.map((entry, index) => (
				<Entry
					key={index}
					entry={entry}
					index={index}
				/>
			))}
		</div>
	)
}

export default TNFTable;