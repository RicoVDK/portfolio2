import React from 'react';
import { Link } from 'gatsby';

import SpinningCog from './spinning-cog';

import {
	buttonScaleHover
} from './effect-styles.js';

const pages = {
	'projects': {
		display: 'Projects',
		url: '/projects'
	},
	'': {
		display: 'About',
		url: '/'
	},
	'contact': {
		display: 'Contact',
		url: '/contact'
	}
}

const PageNav = ({ location }) => {
	const isActive = (page) => {
		if (page.url.length <= 1)
			return location.pathname.length <= 1;

		return location.pathname.indexOf(page.url) > -1
	};

	return (
		<div
			id={`navigation`}
			role={`navigation`}
			className={`relative w-full h-2/5 border-r border-l border-primary desktop:border-0`}
		>
			<div className={`absolute w-full h-full rounded-bl-3xl rounded-br-3xl border border-primary overflow-hidden`}>
				{/** Cogs. */}
				<div className={`absolute flex justify-center w-full h-full top-0 left-0`}>
					<div
						id={`center-cogs-container`}
						className={`relative h-full w-1/3 tablet:w-56 mx-auto`}
					>
						<SpinningCog
							wrapClassName={`transform -translate-x-1/2 -translate-y-1/2`}
							cogClassName={`text-6xl tablet:text-8xl text-gray-800 animate-spin-slow-left`}
						/>
						<SpinningCog
							wrapClassName={` left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
							cogClassName={`text-9xl tablet:text-10xl text-gray-800 animate-spin-slower-right text-shadow-lg`}
						/>
						<SpinningCog
							wrapClassName={`left-full transform -translate-x-1/2 -translate-y-1/2`}
							cogClassName={`text-6xl tablet:text-8xl text-gray-800 animate-spin-slow-right`}
						/>
					</div>
				</div>

				{/** Nav. */}
				<div className={`relative flex flex-row h-full px-2 desktop:px-4`}>
					{Object.keys(pages).map((page, index) => (
						<Link
							key={index}
							to={pages[page].url}
							className={`relative flex-grow h-full group ${buttonScaleHover}`}
						>
							<div className={`absolute w-full h-full px-2 py-2 tablet:py-4`}>
								<div className={`relative w-full h-full rounded-full border border-transparent ${
									isActive(pages[page]) ? 'group-hover:bg-primary-3 bg-primary' : 'group-hover:bg-gray-700 bg-gray-800 border-gray-700'
								}`}></div>
							</div>

							<div className={`absolute flex justify-center items-center w-full h-full text-md tablet:text-lg ${
								isActive(pages[page]) ? 'text-gray-900 font-bold' : 'text-primary'
							}`}>
								{pages[page].display}
							</div>
						</Link>
					))}
				</div>
				
				
			</div>
		</div>
	)
}

export default PageNav;