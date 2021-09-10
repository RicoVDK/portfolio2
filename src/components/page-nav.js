import React from 'react';
import { Link } from 'gatsby';

import { pillClickEffect } from '/src/components/click-effects';

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
	const getLinkProps = ({ isCurrent }) => {
		return {
			className: isCurrent
				? `relative flex flex-grow h-full text-gray-800 bg-primary border border-gray-700 rounded-full justify-center items-center pointer-events-none font-bold`
				: `relative flex flex-grow h-full text-primary bg-gray-800 border border-gray-700 rounded-full ${
					buttonScaleHover
				} justify-center items-center hover:bg-gray-700`
		}
	}

	const onLinkClicked = (event) => {
		pillClickEffect(event.target);
	}

	return (
		<div
			id={`navigation`}
			role={`navigation`}
			className={`relative w-full h-12 tablet:h-20 border-r border-l border-primary desktop:border-0 select-none z-40`}
		>
			<div className={`absolute flex h-full w-full`}>
				<div className={`relative flex-grow h-full bg-gray-900 rounded-tl-3xl rounded-tr-3xl desktop:rounded-tl-none desktop:rounded-tr-none desktop:rounded-bl-3xl desktop:rounded-br-3xl border border-primary overflow-hidden`}>
					{/** Cogs. */}
					{/* <div className={`absolute flex justify-center w-full h-full top-0 left-0`}>
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
					</div> */}

					{/** Nav. */}
					<div className={`relative flex flex-row h-full px-2 desktop:px-4 py-1.5 tablet:py-4`}>
						{Object.keys(pages).map((page, index) => (
							<div key={index} className={`relative h-full px-1 flex-grow tablet:text-lg`}>
								<div className={`absolute w-full h-full px-1 left-0`}>
									<Link
										to={pages[page].url}
										getProps={getLinkProps}
										onClick={onLinkClicked}
									>
										{pages[page].display}
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageNav;