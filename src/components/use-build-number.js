import React, {
	useRef,
} from 'react';
import {
	format
} from 'date-fns';
import preval from 'preval.macro';

import { siteMetadata } from '/gatsby-config';

const buildDate = preval`module.exports = new Date().getTime();`

const useBuildNumber = () => {
	const buildDateString = useRef(`${siteMetadata.version}${format(buildDate, 'ddMMY')}`);

	return buildDateString.current;
}

export default useBuildNumber;