import React, {
	useState,
	useLayoutEffect,
} from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';


export const OnMobile = ({
	children
}) => {
	const [init, setInit] = useState(true);
	const breakpoint = useBreakpoint();

	useLayoutEffect(() => {
		setInit(false);
	}, [setInit]);

	if (init)
		return null;

	return !breakpoint.desktop ? children : null;
}

export const OnDesktop = ({
	children
}) => {
	const [init, setInit] = useState(true);
	const breakpoint = useBreakpoint();

	useLayoutEffect(() => {
		setInit(false);
	}, [breakpoint]);

	if (init)
		return null;

	return breakpoint.desktop ? children : null;
}