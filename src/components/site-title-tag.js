import React from 'react';

import { siteMetadata } from '/gatsby-config';

const SiteTitleTag = ({}) => {
	return (
		<div className={`relative w-auto desktop:w-full desktop:text-xl text-primary text-center italic font-bold p-4`}>
			<div className={`relative w-full text-center bg-gray-800 border border-gray-700 rounded-full py-1 px-4 tablet:py-2 tablet:px-6`}>
				{siteMetadata.title}
			</div>
		</div>
	)
}

export default SiteTitleTag;