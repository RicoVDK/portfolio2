import React, {
	cloneElement
} from 'react';

import './src/styles/main.scss';
import './node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './node_modules/@fortawesome/fontawesome-free/css/solid.min.css';

import {
	MobileSiteLayout,
	DesktopSiteLayout
} from '/src/layouts/site-layout';
import {
	OnMobile,
	OnDesktop
} from '/src/components/breakpoints';

export const wrapPageElement = ({ element, props }) => {
	return (
		<>
			<OnMobile>
				<MobileSiteLayout {...props}>
					{cloneElement(element, { props })}
				</MobileSiteLayout>
			</OnMobile>

			<OnDesktop>
				<DesktopSiteLayout {...props}>
					{cloneElement(element, { props })}
				</DesktopSiteLayout>
			</OnDesktop>
		</>
	)
}