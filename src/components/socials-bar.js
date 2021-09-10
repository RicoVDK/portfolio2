import React from 'react';

import SocialButton from '/src/components/social-button';
import { buttonScaleHover } from '/src/components/effect-styles';

import { siteMetadata } from '/gatsby-config';

const SocialsBar = ({ className }) => {
	return (
		<div className={`relative flex w-full h-16 tablet:h-20 justify-evenly items-center ${className}`}>
			<div className={`absolute w-full h-full border border-t-0 border-primary rounded-bl-3xl rounded-br-3xl `} />

			<SocialButton
				className={`bg-yellow-600 hover:bg-yellow-500 ${buttonScaleHover}`}
				to={siteMetadata.socials.gitlab}
			>
				<i className={`fab fa-gitlab text-2xl`} />
			</SocialButton>
			<SocialButton
				className={`bg-blue-500 hover:bg-blue-400 ${buttonScaleHover}`}
				to={siteMetadata.socials.twitter}
			>
				<i className={`fab fa-twitter text-2xl`} />
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