import React from "react"
import PropTypes from "prop-types"

import FavIcon from '/src/images/favicon.png';
import OGIMG from '/src/images/og-img.png';
import TwitterIMG from '/src/images/twitter-img.png';

import { siteMetadata } from '/gatsby-config';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

			  <meta name="image" content={`${siteMetadata.siteUrl}${OGIMG}`} />
        <meta name="description" content={siteMetadata.desc} />

        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:type" content={`website`} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.desc} />
			  <meta property="og:image" content={`${siteMetadata.siteUrl}${OGIMG}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@ricovdk" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.desc} />
			  <meta name="twitter:image" content={`${siteMetadata.siteUrl}${TwitterIMG}`} />

        <link rel="shortcut icon" type="image/png" href={FavIcon}/>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
