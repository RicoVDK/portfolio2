import React from 'react';

import SiteBanner from './site-banner';
import PageNav from './page-nav';

const SiteHeader = ({ location }) => {
	return (
		<div
			id={`header`}
			className={`relative w-full w-full h-full bg-transparent`}
		>
			<div className={`absolute flex flex-col w-full h-full`}>
				{/** Banner. */}
				<SiteBanner />

				{/** Navigation. */}
				<PageNav
					location={location}
				/>

				{/** Page shadow. */}
				<div
					id={`page-shadow`}
					className={`absolute w-full h-6 bottom-0 transform translate-y-full z-40 px-px pointer-events-none`}
				>
					<div className={`relative w-full h-full bg-gradient-to-t from-transparent to-gray-900`}></div>
				</div>
			</div>
		</div>
	)
}

export default SiteHeader;