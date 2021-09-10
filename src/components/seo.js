import React from 'react';
import {
	Helmet
} from 'react-helmet';

import { siteMetadata } from '/gatsby-config';

const SEO = ({
	pageTitle = '',
	desc = '',
	img = null,
	isPost = false,
	location,
}) => {
	const displayTitle = `${siteMetadata.title} | ${pageTitle}`;

	return (
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

			<title>{displayTitle}</title>
			<meta name="description" content={desc} />
			<meta name="image" content={img} />

			<meta property="og:url" content={location.href} />
			{ isPost ? <meta property="og:type" content="article" /> : null }
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={desc} />
			{ img ? <meta property="og:image" content={img} /> : null }

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@ricovdk" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={desc} />
			{ img ? <meta name="twitter:image" content={img} /> : null }
		</Helmet>
	)
}

export default SEO;