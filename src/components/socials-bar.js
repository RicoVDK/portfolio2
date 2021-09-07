import React from 'react';

import SocialButton from '/src/components/social-button';
import { buttonScaleHover } from '/src/components/effect-styles';

import { siteMetadata } from '/gatsby-config';

const SocialsBar = ({ className }) => {
	return (
		<div className={`relative flex w-full h-20 justify-evenly items-center ${className}`}>
			<div className={`absolute w-full h-full border border-t-0 border-primary rounded-bl-3xl rounded-br-3xl `} />

			<SocialButton
				className={`bg-gray-500 pointer-events-none ${buttonScaleHover}`}
				to={siteMetadata.socials.youtube}
			>
				<i className={`fas fa-caret-right text-4xl pl-1`} />
			</SocialButton>
			<SocialButton
				className={`bg-blue-500 hover:bg-blue-400 ${buttonScaleHover}`}
				to={siteMetadata.socials.twitter}
			>
				<i className={`fab fa-twitter text-xl`} />
			</SocialButton>
			<SocialButton
				className={`bg-transparent hover:text-gray-400 ${buttonScaleHover}`}
				to={siteMetadata.socials.git}
			>
				<i className={`fab fa-github text-5xl`} />
			</SocialButton>
		</div>
	)
}

export default SocialsBar;