import React from 'react';

import { siteMetadata } from '/gatsby-config';

const SiteTitleTag = ({}) => {
	return (
		<div className={`relative w-auto text-sm tablet:text-lg text-primary text-center italic font-bold p-4 mx-auto`}>
			<div className={`relative w-full text-center bg-gray-800 border desktop:border-2 border-primary rounded-full py-1 px-4 tablet:py-2 tablet:px-6 desktop:py-0`}>
				{siteMetadata.title}
			</div>
		</div>
	)
}

export default SiteTitleTag;