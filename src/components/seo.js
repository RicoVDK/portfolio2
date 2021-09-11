import React from 'react';
import {
	Helmet
} from 'react-helmet';


import { siteMetadata } from '/gatsby-config';

const SEO = ({
	pageTitle = '',
	desc = '',
	isPost = false,
	location,
}) => {
	const displayTitle = `${siteMetadata.title} | ${pageTitle}`;

	return (
		<Helmet>
			<title>{displayTitle}</title>
		</Helmet>
	)
}

export default SEO;