import React, {
	useState,
	useRef,
} from 'react';

import SiteHeader from '/src/components/site-header';
import SocialsBar from '/src/components/socials-bar';
import useBuildNumber from '/src/components/use-build-number';
import SiteTitleTag from '/src/components/site-title-tag';

import {
	PageLayout
} from './page-layout';

export const MobileSiteLayout = ({ location, children }) => {
	const [modal, setModal] = useState(null);
	const [sideOpen, setSideOpen] = useState(false);

	return (
		<div
			id={`page-wrapper`}
			className={`relative flex flex-col items-center h-screen w-full overflow-hidden text-gray-300`}
		>
			{modal}

			{/** Page. */}
			<PageLayout
				location={location}
				sideOpen={sideOpen}
				setModal={setModal}
				setSideOpen={setSideOpen}
			>
				{children}
			</PageLayout>
			
			{/** Header. */}
			<div className={`relative w-full`}>
				<SiteHeader
					location={location}
				/>
			</div>

			{/** Side Toggle. */}
			<div className={`absolute w-16 h-8 tablet:w-24 tablet:h-12 z-40 left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-30 tablet:-translate-y-36`}>
				<div
					onClick={() => setSideOpen(!sideOpen)}
					className={`relative flex w-full h-full rounded-tl-full rounded-tr-full border border-b-0 border-gray-700 justify-center items-center ${
						sideOpen ? 'bg-primary' : 'bg-gray-800'
					}`}
				>
					<i className={`fas fa-bars text-xl tablet:text-3xl ${sideOpen ? 'text-gray-800' : 'text-primary'}`} />
				</div>
			</div>
			
			{/** Fade. */}
			<div className={`absolute w-28 h-28 tablet:w-40 tablet:h-40 z-30 left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-30 tablet:-translate-y-36 overflow-hidden pointer-events-none`}>
				<div className={`relative w-full h-full bottom-0 transform translate-y-1/2 bg-gradient-radial from-gray-900 to-transparent`} />
			</div>
		</div>
	)
};

export const DesktopSiteLayout = ({ location, children }) => {
	const [modal, setModal] = useState(null);
	const build = useBuildNumber();

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
				<div className={`relative flex w-full bg-gray-900`}>
					{/** Side banner. */}
					<div className={`relative flex flex-col w-1/4 min-w-72`}>
						{/** Title. */}
						<div className={`relative flex flex-col justify-center items-center w-full h-24 border-r border-primary overflow-hidden`}>
							{/* <SpinningCog
								wrapClassName={`top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2`}
								cogClassName={`text-10xl tablet:text-12xl text-gray-800 animate-spin-slower-right`}
							/> */}

							<SiteTitleTag />

							<div className={`absolute w-full p-1 bottom-0 left-0`}>
								<div className={`relative m-auto text-gray-800 italic text-sm`}>
									{build}
								</div>
							</div>
						</div>

						{/** Socials bar. */}
						<SocialsBar className={`border-r border-t border-primary`}/>
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
			{/* <div className={`absolute w-3/4 h-1/5 min-w-1000px max-w-1200px z-0`}>
				<div className={`relative w-full h-3/5`}>
					<SpinningCog
						wrapClassName={`left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
						cogClassName={`text-10xl tablet:text-12xl text-gray-800 animate-spin-slower-left`}
					/>
				</div>
			</div> */}
		</div>
	)
};