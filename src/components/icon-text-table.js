import React from 'react';

const IconTextTable = ({
	id = '',
	className = '',
	contents = [],
}) => {
	return (
		<div
			id={id}
			className={`relative flex flex-col w-full ${className}`}
		>
				{contents.map((content, index) => (
					<div
						key={index}
						className={`relative flex w-full rounded-full overflow-hidden mb-4 last:mb-0`}
					>
						{/** Border Substitute. */}
						<div className={`absolute w-full h-full border border-gray-700 rounded-full`} />

						<div className={`relative h-12 bg-gray-800 rounded-full`}>
							{/** Border Substitute. */}
							<div className={`absolute w-full h-full border border-gray-700 rounded-full`} />

							{/** Icon. */}
							<div className={`absolute flex h-12 w-12 items-center justify-center text-xl border border-gray-700 rounded-full`}>
								<i className={content.icon} />
							</div>

							{/** Text. */}
							<div className={`relative flex h-full pl-16 pr-6 items-center font-bold`}>
								{content.displayName}
							</div>
						</div>

						{/** Child. */}
						<div className={`relative flex flex-grow h-12 justify-center items-center`}>
							{content.child}
						</div>
					</div>
				))}
		</div>
	)
}

export default IconTextTable;