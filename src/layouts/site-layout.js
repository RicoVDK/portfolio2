import React, {
	useState
} from 'react';
import { siteMetadata as Site } from '/gatsby-config';

import SiteHeader from '/src/components/site-header';
import SpinningCog from '/src/components/spinning-cog';
import SocialButton from '/src/components/social-button';
import { buttonScaleHover } from '/src/components/effect-styles';

import {
	PageLayout
} from './page-layout';

export const MobileSiteLayout = ({ location, children }) => {
	const [modal, setModal] = useState(null);

	return (
		<div
			id={`page-wrapper`}
			className={`relative flex flex-col items-center h-screen w-full overflow-hidden text-gray-300`}
		>
			{modal}
			
			{/** Header. */}
			<div className={`relative w-full h-1/5`}>
				<SiteHeader
					location={location}
				/>
			</div>

			{/** Page. */}
			<PageLayout location={location} setModal={setModal}>
				{children}
			</PageLayout>
		</div>
	)
};

export const DesktopSiteLayout = ({ location, children }) => {
	const [modal, setModal] = useState(null);

	return (
		<div
			id={'site-wrapper'}
			className={`relative flex flex-row justify-center w-full h-screen overflow-hidden text-gray-300`}
		>
			{modal}

			<div
				id={'site-content'}
				className={`relative flex flex-col min-w-1000px w-3/4 max-w-1200px h-full border-l border-r border-primary z-10`}
			>
				{/** Header. */}
				<div className={`relative flex w-full h-1/5 bg-gray-900`}>
					{/** Side banner. */}
					<div className={`relative flex flex-col w-1/4 min-w-72 h-full`}>
						{/** Title. */}
						<div className={`relative flex flex-col justify-center items-center w-full flex-grow border-r border-primary overflow-hidden`}>
							<SpinningCog
								wrapClassName={`top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2`}
								cogClassName={`text-10xl tablet:text-12xl text-gray-800 animate-spin-slower-right`}
							/>

							<div className={`relative text-xl text-primary text-center italic`}>
								{Site.title}
							</div>
						</div>

						{/** Socials bar. */}
						<div className={`relative w-full h-2/5 border-r border-primary`}>
							<div className={`absolute flex w-full h-full border border-primary rounded-bl-3xl rounded-br-3xl justify-evenly items-center`}>
								<SocialButton
									className={`bg-gray-500 pointer-events-none ${buttonScaleHover}`}
									to={Site.socials.youtube}
								>
									<i className={`fas fa-caret-right text-4xl pl-1`} />
								</SocialButton>
								<SocialButton
									className={`bg-blue-500 hover:bg-blue-400 ${buttonScaleHover}`}
									to={Site.socials.twitter}
								>
									<i className={`fab fa-twitter text-xl`} />
								</SocialButton>
								<SocialButton
									className={`bg-transparent hover:text-gray-400 ${buttonScaleHover}`}
									to={Site.socials.git}
								>
									<i className={`fab fa-github text-5xl`} />
								</SocialButton>
							</div>
						</div>
					</div>

					{/** Main banner. */}
					<div className={`relative flex-grow h-full`}>
						<SiteHeader
							location={location}
						/>
					</div>
				</div>

				{/** Page. */}
				<PageLayout location={location} setModal={setModal}>
					{children}
				</PageLayout>
			</div> 

			{/** Cog. */}
			<div className={`absolute w-3/4 h-1/5 min-w-1000px max-w-1200px z-0`}>
				<div className={`relative w-full h-3/5`}>
					<SpinningCog
						wrapClassName={`left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
						cogClassName={`text-10xl tablet:text-12xl text-gray-800 animate-spin-slower-left`}
					/>
				</div>
			</div>
		</div>
	)
};