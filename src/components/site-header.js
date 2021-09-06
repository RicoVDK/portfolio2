import React from 'react';

import SiteBanner from './site-banner';
import PageNav from './page-nav';
import {
	OnMobile,
	OnDesktop
} from '/src/components/breakpoints';

const SiteHeader = ({ location }) => {
	return (
		<div
			id={`header`}
			className={`relative flex flex-col w-full w-full h-full bg-transparent`}
		>
			<OnDesktop>
				{/** Banner. */}
				<SiteBanner />
			</OnDesktop>
			<OnDesktop>
				{/** Navigation. */}
				<PageNav
					location={location}
				/>
			</OnDesktop>

			<OnMobile>
				{/** Navigation. */}
				<PageNav
					location={location}
				/>
			</OnMobile>
			<OnMobile>
				{/** Banner. */}
				<SiteBanner />
			</OnMobile>

			{/** Page shadow. */}
			<div
				id={`page-shadow`}
				className={`absolute w-full h-6 desktop:bottom-0 transform -translate-y-full desktop:translate-y-full z-30 px-px pointer-events-none`}
			>
				<div className={`relative w-full h-full bg-gradient-to-t from-gray-900 to-transparent desktop:from-transparent desktop:to-gray-900`}></div>
			</div>
		</div>
	)
}

export default SiteHeader;