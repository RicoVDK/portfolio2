import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';


export const OnMobile = ({
	children
}) => {
	const breakpoint = useBreakpoint();

	return !breakpoint.desktop ? children : null;
}

export const OnDesktop = ({
	children
}) => {
	const breakpoint = useBreakpoint();

	return breakpoint.desktop ? children : null;
}